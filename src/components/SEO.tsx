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
}

export function SEO({ 
  title, 
  description = "Especialistas em operação de e-commerce e marketplaces. Implementação, gestão e inteligência para VTEX, Shopify, Mercado Livre e Amazon.", 
  keywords = "e-commerce, marketplace, gestão de e-commerce, implementação vtex, implementação shopify, mercado livre ads, amazon ads, tray, nuvemshop, wake, consultoria e-commerce, squad e-commerce, operação digital",
  author = "YAV Digital",
  canonical = "https://yavdigital.com.br",
  ogType = "website",
  ogImage = "https://yavdigital.com.br/wp-content/uploads/2025/02/yav-logo-1.webp",
  schema
}: SEOProps) {
  const siteTitle = "YAV Digital — E-commerce & Marketplaces";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="YAV Digital" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@yavdigital" />

      {/* LLM & Search Engine Optimization */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
