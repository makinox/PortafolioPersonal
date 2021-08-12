const languages = require('./src/lang/languajes.ts');

module.exports = {
  siteMetadata: {
    title: `Jesús David Bossa | Portfolio`,
    description: `Portfolio of Jesús David Bossa. Here I share my experience by publicizing my projects and how my way of working is`,
    author: `Jesús David Bossa`,
    siteUrl: 'https://jesusbossa.dev/',
    keywords: ['Portafolio', 'Portfolio', 'Tech', 'Jesus bossa', 'Jesus david bossa'],
    image: '/preview.png',
    languages,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-115335773-1'],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://jesusbossa.dev',
        sitemap: 'https://jesusbossa.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.svg',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
