import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object;
  noindex?: boolean;
}

export function SEO({ 
  title, 
  description = "Especialistas em operação de e-commerce e marketplaces. Implantação, gestão e inteligência para VTEX, Shopify, Mercado Livre e Amazon.", 
  keywords = "gestão de e-commerce, marketplace, vtex, shopify, mercado livre, amazon, shopee, implantação de loja virtual, CRO, SEO para e-commerce, mercado livre ads, amazon ads, gestão de marketplace, consultoria e-commerce, otimização de conversão",
  author = "YAV Digital",
  canonical = "https://yavdigital.com.br",
  ogType = "website",
  ogImage = "https://yavdigital.com.br/og-image.jpg",
  schema,
  noindex = false
}: SEOProps) {
  const siteTitle = "YAV Digital — E-commerce & Marketplaces";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  const robotsContent = noindex 
    ? "noindex, nofollow" 
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="YAV Digital" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@yavdigital" />
      <meta name="twitter:creator" content="@yavdigital" />

      {/* Search Engine Bots */}
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Mobile & PWA */}
      <meta name="theme-color" content="#6E29F6" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="YAV Digital" />
      
      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
