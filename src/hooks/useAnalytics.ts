import { useEffect, useCallback } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type AnalyticsEvent =
  | 'page_view'
  | 'form_submit'
  | 'whatsapp_click'
  | 'email_click'
  | 'phone_click'
  | 'service_view'
  | 'case_view'
  | 'blog_view'
  | 'cta_click'
  | 'download'
  | 'search'
  | 'contact_initiated';

export interface AnalyticsParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

/**
 * Hook para Google Analytics 4 e Meta Pixel
 * 
 * @example
 * const { trackEvent, trackPageView } = useAnalytics();
 * 
 * trackEvent('form_submit', { event_category: 'Contato', event_label: 'Formulário Principal' });
 */
export function useAnalytics() {
  /**
   * Rastreia eventos personalizados
   */
  const trackEvent = useCallback((eventName: AnalyticsEvent, params: AnalyticsParams = {}) => {
    // Google Analytics 4
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, {
        event_category: params.event_category || 'engagement',
        event_label: params.event_label,
        value: params.value,
        ...params,
      });
    }

    // Meta Pixel (Facebook)
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', mapEventToFb(eventName), params);
    }

    // Console log em desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics Event]', eventName, params);
    }
  }, []);

  /**
   * Rastreia visualização de página
   */
  const trackPageView = useCallback((path: string, title: string) => {
    // GA4
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title,
        page_location: window.location.href,
      });
    }

    // Meta Pixel
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView');
    }
  }, []);

  return { trackEvent, trackPageView };
}

/**
 * Mapeia eventos internos para eventos do Facebook Pixel
 */
function mapEventToFb(eventName: AnalyticsEvent): string {
  const mapping: Record<AnalyticsEvent, string> = {
    page_view: 'PageView',
    form_submit: 'Lead',
    whatsapp_click: 'Contact',
    email_click: 'Contact',
    phone_click: 'Contact',
    service_view: 'ViewContent',
    case_view: 'ViewContent',
    blog_view: 'ReadContent',
    cta_click: 'Click',
    download: 'Download',
    search: 'Search',
    contact_initiated: 'Contact',
  };
  return mapping[eventName] || 'Custom';
}

/**
 * Componente wrapper para tracking automático de page views
 */
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    const handleRouteChange = () => {
      trackPageView(window.location.pathname, document.title);
    };

    // Track inicial
    handleRouteChange();

    // Listen para mudanças de rota (se usando React Router)
    const observer = new MutationObserver(handleRouteChange);
    observer.observe(document.body, { subtree: true, childList: true });

    return () => observer.disconnect();
  }, [trackPageView]);

  return <>{children}</>;
}

/**
 * HOC para tracking de eventos em componentes
 */
export function withAnalytics<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  eventName: AnalyticsEvent,
  eventParams?: AnalyticsParams
) {
  return function WithAnalytics(props: P) {
    const { trackEvent } = useAnalytics();

    useEffect(() => {
      trackEvent(eventName, eventParams);
    }, [trackEvent, eventName, eventParams]);

    return <WrappedComponent {...props} />;
  };
}

/**
 * Hook específico para tracking de formulários
 */
export function useFormTracking(formName: string) {
  const { trackEvent } = useAnalytics();

  const trackSubmit = useCallback(
    (success: boolean, formData?: Record<string, any>) => {
      trackEvent('form_submit', {
        event_category: 'Formulário',
        event_label: formName,
        value: success ? 1 : 0,
        form_data: formData,
      });
    },
    [trackEvent, formName]
  );

  return { trackSubmit };
}

/**
 * Hook específico para tracking de cliques em CTAs
 */
export function useCTATracking(ctaName: string, location: string) {
  const { trackEvent } = useAnalytics();

  const trackClick = useCallback(() => {
    trackEvent('cta_click', {
      event_category: 'CTA',
      event_label: ctaName,
      location,
    });
  }, [trackEvent, ctaName, location]);

  return { trackClick };
}

/**
 * Inicializa os scripts de analytics (colocar no _app.tsx ou main.tsx)
 */
export function initializeAnalytics(ga4Id: string, fbPixelId: string) {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: any[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', ga4Id, {
    send_page_view: false, // Vamos fazer manual para SPA
  });

  // Meta Pixel
  const fbScript = document.createElement('script');
  fbScript.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  `;
  document.head.appendChild(fbScript);

  window.fbq?.('init', fbPixelId);
  window.fbq?.('track', 'PageView');
}
