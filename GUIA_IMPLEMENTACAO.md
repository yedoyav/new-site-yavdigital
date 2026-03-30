# 🚀 Guia de Implementação - Site YAV Digital 2.0

## Visão Geral

Este documento fornece instruções passo a passo para implementar todas as melhorias identificadas na auditoria completa do site da YAV Digital.

---

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Acesso ao servidor/hospedagem
- Chaves de API (Google Analytics, Meta Pixel, etc.)

---

## ✅ Fase 1: Configuração Inicial (Dia 1)

### 1.1 Instalar Dependências Adicionais

```bash
npm install react-lazy-load-image-component @sentry/react zod react-hook-form
npm install -D vite-bundle-visualizer
```

### 1.2 Atualizar index.html

O arquivo `index.html` já foi atualizado com:
- ✅ Critical CSS inline
- ✅ Preconnects otimizados
- ✅ Loading skeleton
- ✅ Acessibilidade (skip links)
- ✅ Detecção de reduced-motion

**Verificação:**
```bash
npm run build
npm run preview
```

### 1.3 Configurar Variáveis de Ambiente

Crie `.env.local`:

```env
# Analytics
VITE_GA4_ID=G-XXXXXXXXXX
VITE_FB_PIXEL_ID=1234567890

# API
VITE_API_URL=https://api.yavdigital.com.br

# Formspree (formulário de contato)
VITE_FORMSPREE_ID=xxxxxxxx
```

---

## 🎨 Fase 2: Componentes Otimizados (Dia 2-3)

### 2.1 Implementar OptimizedImage

O componente `OptimizedImage.tsx` já foi criado. Agora integre nas páginas:

**Antes:**
```tsx
<img src={logo} alt="Logo" />
```

**Depois:**
```tsx
import { OptimizedImage } from '@/components/OptimizedImage';

<OptimizedImage
  src="/logo-yav.webp"
  alt="YAV Digital"
  width={200}
  height={60}
  effect="blur"
  priority={true} // Para imagens above the fold
/>
```

### 2.2 Atualizar Navbar e Footer

Substitua todas as imagens por `OptimizedImage`:

```tsx
// src/components/Navbar.tsx
import { PriorityImage } from '@/components/OptimizedImage';

<PriorityImage
  src="https://yavdigital.com.br/wp-content/uploads/2025/02/yav-logo-1.webp"
  alt="YAV Digital"
  width={140}
  height={40}
  className="h-7"
/>
```

### 2.3 Migrar Imagens para Local

1. Baixe todas as imagens do WordPress
2. Otimize com Squoosh.app ou ImageOptim
3. Converta para WebP
4. Coloque em `/public/images/`
5. Atualize os paths no código

```bash
# Estrutura sugerida
/public
  /images
    /logo
      yav-logo.webp
      yav-logo-dark.webp
    /og
      og-home.jpg
      og-services.jpg
      og-contact.jpg
    /cases
      case-1.webp
      case-2.webp
```

---

## 🔍 Fase 3: SEO Técnico (Dia 4-5)

### 3.1 Componente SEO Atualizado

O componente `SEO.tsx` já foi expandido. Use em cada página:

```tsx
// src/pages/Home.tsx
<SEO
  title="Home"
  description="Especialistas em operação de e-commerce..."
  keywords="e-commerce, marketplace, vtex, shopify..."
  canonical="https://yavdigital.com.br/"
  ogImage="/images/og/og-home.jpg"
  schema={homeSchema}
/>
```

### 3.2 Criar OG Images

Use Figma ou Canva para criar imagens 1200x630px:

- [ ] `/images/og/og-home.jpg`
- [ ] `/images/og/og-services.jpg`
- [ ] `/images/og/og-service-implantacao.jpg`
- [ ] `/images/og/og-service-marketplace.jpg`
- [ ] `/images/og/og-service-ecommerce.jpg`
- [ ] `/images/og/og-service-ads.jpg`
- [ ] `/images/og/og-service-cadastro.jpg`
- [ ] `/images/og/og-cases.jpg`
- [ ] `/images/og/og-blog.jpg`
- [ ] `/images/og/og-contact.jpg`

### 3.3 Implementar Schema FAQPage

Adicione nas páginas de serviço:

```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": servicesData[0].faq.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a
    }
  }))
};

<SEO schema={[homeSchema, faqSchema]} />
```

### 3.4 Sitemap Dinâmico para Blog

Crie script para gerar sitemap automaticamente:

```ts
// scripts/generate-sitemap.ts
import { blogPosts } from '../src/data/blog';

const blogSitemap = blogPosts.map(post => `
  <url>
    <loc>https://yavdigital.com.br/blog/${post.slug}</loc>
    <lastmod>${post.modifiedAt}</lastmod>
    <priority>0.7</priority>
  </url>
`).join('');
```

---

## ♿ Fase 4: Acessibilidade (Dia 6-7)

### 4.1 Audit Contraste

Use estas ferramentas:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Lighthouse Accessibility audit
- Stark plugin (Figma/Sketch)

### 4.2 Melhorar Focus Indicators

Adicione ao `index.css`:

```css
@layer base {
  *:focus-visible {
    @apply outline-2 outline-primary outline-offset-2;
  }
  
  button:focus-visible,
  a:focus-visible {
    @apply ring-2 ring-primary ring-offset-2;
  }
}
```

### 4.3 Adicionar ARIA Landmarks

```tsx
// Layout.tsx
<main id="main-content" role="main">
  <Outlet />
</main>

<nav role="navigation" aria-label="Menu principal">
  {/* ... */}
</nav>

<footer role="contentinfo">
  {/* ... */}
</footer>
```

### 4.4 Testar com Leitores de Tela

- NVDA (Windows, gratuito)
- VoiceOver (macOS, nativo)
- Narrator (Windows)

**Checklist de teste:**
- [ ] Navegação por teclado funciona
- [ ] Skip link leva ao conteúdo
- [ ] Todas imagens têm alt descritivo
- [ ] Formulários têm labels associados
- [ ] Erros são anunciados
- [ ] Headings em ordem lógica (h1 → h2 → h3)

---

## 📊 Fase 5: Analytics (Dia 8)

### 5.1 Configurar Google Analytics 4

1. Crie propriedade GA4
2. Copie Measurement ID (G-XXXXXXXXXX)
3. Adicione ao `.env.local`

### 5.2 Implementar Hook de Analytics

O hook `useAnalytics.ts` já foi criado. Integre:

```tsx
// src/main.tsx
import { initializeAnalytics } from './hooks/useAnalytics';

initializeAnalytics(
  import.meta.env.VITE_GA4_ID,
  import.meta.env.VITE_FB_PIXEL_ID
);
```

### 5.3 Trackear Eventos no Formulário

```tsx
// src/pages/Contact.tsx
import { useFormTracking } from '@/hooks/useAnalytics';

export function Contact() {
  const { trackSubmit } = useFormTracking('Contato Principal');
  
  const handleSubmit = async (e) => {
    // ... validação
    
    try {
      const response = await fetch(...);
      trackSubmit(true, data);
    } catch {
      trackSubmit(false);
    }
  };
}
```

### 5.4 Events para Tracking

Implemente em componentes chave:

```tsx
// Botão WhatsApp
import { useCTATracking } from '@/hooks/useAnalytics';

const { trackClick } = useCTATracking('WhatsApp Hero', 'Home');

<a 
  href="https://wa.me/5511999999999"
  onClick={() => trackClick()}
>
  WhatsApp
</a>
```

---

## 🔒 Fase 6: Segurança (Dia 9)

### 6.1 Configurar Headers

**Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

**Cloudflare Workers:**
```js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const response = await fetch(request);
  const newHeaders = new Headers(response.headers);
  
  newHeaders.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  newHeaders.set("X-Content-Type-Options", "nosniff");
  newHeaders.set("X-Frame-Options", "DENY");
  newHeaders.set("X-XSS-Protection", "1; mode=block");
  
  return new Response(response.body, {
    status: response.status,
    headers: newHeaders
  });
}
```

### 6.2 Content Security Policy

```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               font-src 'self' https://fonts.gstatic.com;
               img-src 'self' data: https:;
               connect-src 'self' https://www.google-analytics.com https://api.yavdigital.com.br;">
```

### 6.3 Auditoria de Dependências

```bash
npm audit
npm audit fix

# Verificar vulnerabilidades críticas
npm audit --audit-level=critical
```

---

## 🎯 Fase 7: Performance (Dia 10-11)

### 7.1 Analisar Bundle

```bash
npm run build
npx vite-bundle-visualizer
```

**Otimizações:**
- Tree shaking de ícones Lucide
- Code splitting de rotas
- Lazy loading de componentes pesados

### 7.2 Otimizar Ícones

**Antes:**
```tsx
import { ArrowRight, Check, X } from 'lucide-react';
```

**Depois (se bundle grande):**
```tsx
import ArrowRight from 'lucide-react/icons/ArrowRight';
import Check from 'lucide-react/icons/Check';
import X from 'lucide-react/icons/X';
```

### 7.3 Implementar Prefetching

```tsx
// Navbar.tsx
<Link 
  to="/servicos"
  onMouseEnter={() => import('./pages/Services')}
  onFocus={() => import('./pages/Services')}
>
  Serviços
</Link>
```

### 7.4 Configurar Cache

**Vercel:**
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

---

## 📱 Fase 8: PWA (Dia 12)

### 8.1 Gerar Ícones PWA

Use [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator):

```bash
npx pwa-asset-generator public/logo.svg public/icons \
  --background "#F2F1F6" \
  --padding "10" \
  --icon-only
```

### 8.2 Screenshots para PWA

Tire screenshots em:
- Desktop (1280x720)
- Mobile (750x1334)

Salve em `/public/screenshots/`

### 8.3 Service Worker (Opcional)

Para cache offline:

```ts
// src/service-worker.ts
/// <reference lib="webworker" />

const CACHE_NAME = 'yav-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});
```

---

## 🧪 Fase 9: Testes (Dia 13-14)

### 9.1 Testes Automatizados

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

**Exemplo de teste:**
```tsx
// src/components/__tests__/Navbar.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../Navbar';

test('renders logo with alt text', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  
  expect(screen.getByAltText('YAV Digital')).toBeInTheDocument();
});
```

### 9.2 Testes Manuais

**Browser Testing:**
- [ ] Chrome (Desktop & Mobile)
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] iOS Safari
- [ ] Android Chrome

**Device Testing:**
- Desktop 1920x1080
- Laptop 1366x768
- Tablet 768x1024
- Mobile 375x667

### 9.3 Performance Testing

Ferramentas:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- GTmetrix

**Metas:**
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🚀 Deploy (Dia 15)

### 15.1 Build de Produção

```bash
npm run clean
npm run build
npm run preview
```

### 15.2 Deploy Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

### 15.3 Pós-Deploy Checklist

- [ ] Testar formulário de contato
- [ ] Verificar analytics funcionando
- [ ] Validar sitemap no Google Search Console
- [ ] Submeter sitemap ao Bing Webmaster Tools
- [ ] Configurar redirects 301 se necessário
- [ ] Testar SSL/HTTPS
- [ ] Verificar robots.txt
- [ ] Monitorar Core Web Vitals

---

## 📈 Monitoramento Contínuo

### Daily
- Verificar Google Analytics
- Checar form submissions

### Weekly
- Revisar Core Web Vitals
- Auditar links quebrados
- Verificar uptime

### Monthly
- Atualizar dependências
- Revisar copy/conteúdo
- Analisar conversões
- Otimizar imagens novas

---

## 🆘 Troubleshooting

### Problema: Imagens não carregam
**Solução:** Verificar paths, CORS, e formato WebP support

### Problema: Analytics não trackeia
**Solução:** Verificar IDs, ad blockers, e console errors

### Problema: PWA não instala
**Solução:** Validar manifest.json, HTTPS, e service worker

### Problema: Performance baixa
**Solução:** Rodar Lighthouse, identificar bottlenecks

---

## 📞 Suporte

- **Documentação:** `/AUDITORIA_COMPLETA.md`
- **Issues:** GitHub Repository
- **Equipe:** dev@yavdigital.com.br

---

**Última atualização:** Janeiro 2025  
**Versão:** 2.0
