import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  image,
  pathname = '/',
}: {
  description?: string;
  lang?: string;
  meta?: Array<any>;
  title: string;
  image: string;
  pathname: string;
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;
  const pathImage = `${site.siteMetadata.siteUrl}${image || site.siteMetadata.image}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title}`}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      link={[
        {
          rel: 'canonical',
          href: canonical,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${site.siteMetadata.title} | ${title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `image`,
          content: pathImage,
        },
        {
          property: `og:image`,
          content: pathImage,
        },
        {
          name: `twitter:image`,
          content: pathImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `${site.siteMetadata.title} | ${title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
