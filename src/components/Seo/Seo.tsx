import React from 'react';
import { Helmet } from 'react-helmet';
import { useSeoQuery } from './Seo.graph';

function SEO({ title, description, lang }: { title?: string; description?: string; lang?: string }) {
  const { site } = useSeoQuery();

  const seo = {
    title: title || lang === 'es' ? 'Jesús David Bossa | Portafolio' : site.siteMetadata.title,
    description: description || lang === 'es' ? 'Portafolio de Jesús David Bossa' : site.siteMetadata.description,
    image: site.siteMetadata.image,
    url: site.siteMetadata.siteUrl,
    lang: lang || 'en',
  };

  return (
    <Helmet title={seo.title} titleTemplate={seo.title} htmlAttributes={{ lang: seo.lang }}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="makinox" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet" />
      <link as="style" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
    </Helmet>
  );
}
export default SEO;
