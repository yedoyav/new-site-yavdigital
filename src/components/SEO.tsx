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
  noIndex?: boolean;
  noFollow?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
  breadcrumbs?: Array<{ '@type': string; name: string; item: string }>;
}

export function SEO({ 
  title, 
  description = "Especialistas em operação de e-commerce e marketplaces. Implementação, gestão e inteligência para VTEX, Shopify, Mercado Livre e Amazon.", 
  keywords = "e-commerce, marketplace, gestão de e-commerce, implementação vtex, implementação shopify, mercado livre ads, amazon ads, tray, nuvemshop, wake, consultoria e-commerce, squad e-commerce, operação digital, erp, hub de integração, bling, tiny, anymarket, plugg, magalu, shein, americanas, tiktok shop",
  author = "YAV Digital",
  canonical = "https://yavdigital.com.br",
  ogType = "website",
  ogImage = "https://yavdigital.com.br/wp-content/uploads/2025/02/yav-logo-1.webp",
  schema,
  noIndex = false,
  noFollow = false,
  publishedTime,
  modifiedTime,
  articleSection,
  breadcrumbs
}: SEOProps) {
  const siteTitle = "YAV Digital — E-commerce & Marketplaces";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  const robotsContent = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(', ');

  // Schema de BreadcrumbList se fornecido
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item
    }))
  } : null;

  // Schema de Article para posts de blog
  const articleSchema = publishedTime ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": "Organization",
      "name": "YAV Digital",
      "url": "https://yavdigital.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "YAV Digital",
      "logo": {
        "@type": "ImageObject",
        "url": ogImage
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    },
    "articleSection": articleSection || "Blog"
  } : null;

  // Combina todos os schemas
  const combinedSchema = schema 
    ? Array.isArray(schema) 
      ? [...schema, breadcrumbSchema, articleSchema].filter(Boolean)
      : [schema, breadcrumbSchema, articleSchema].filter(Boolean)
    : [breadcrumbSchema, articleSchema].filter(Boolean);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={noIndex ? 'noindex' : 'index'} />
      <meta name="bingbot" content={noIndex ? 'noindex' : 'index'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title || "YAV Digital"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="YAV Digital" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Article specific OG tags */}
      {publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {articleSection && <meta property="article:section" content={articleSection} />}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title || "YAV Digital"} />
      <meta name="twitter:site" content="@yavdigital" />
      <meta name="twitter:creator" content="@yavdigital" />

      {/* Additional SEO */}
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="São Paulo" />
      <meta name="geo.position" content="-23.550520;-46.633308" />
      <meta name="ICBM" content="-23.550520, -46.633308" />
      
      {/* Language alternates */}
      <link rel="alternate" hrefLang="pt-BR" href={canonical} />
      
      {/* Preconnect hints for external resources */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Structured Data (JSON-LD) */}
      {combinedSchema.length > 0 && combinedSchema.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
