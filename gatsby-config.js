const languages = require('./src/lang/languajes.ts');

module.exports = {
  siteMetadata: {
    title: `Jesús David Bossa | Portfolio`,
    description: `Portfolio of Jesús David Bossa. Here I share my experience by publicizing my projects and my way of work`,
    author: `Jesús David Bossa`,
    siteUrl: 'https://jesusbossa.dev/',
    keywords: ['Portafolio', 'Portfolio', 'Tech', 'Jesus bossa', 'Jesus david bossa'],
    image: '/preview.png',
    languages,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
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
        icon: 'src/images/icon.svg',
        lang: `en`,
        name: `Jesús David Bossa | Portfolio`,
        short_name: `Jesús Bossa | Portfolio`,
        description: `Portfolio of Jesús David Bossa. Here I share my experience by publicizing my projects and my way of work`,
        start_url: `/`,
        display: `standalone`,
        localize: [
          {
            lang: `en`,
            name: `Jesús David Bossa | Portfolio`,
            short_name: `Jesús Bossa | Portfolio`,
            description: `Portfolio of Jesús David Bossa. Here I share my experience by publicizing my projects and my way of work`,
            start_url: `/`,
          },
          {
            lang: `es`,
            name: `Jesús David Bossa | Portafolio`,
            short_name: `Jesús Bossa | Portafolio`,
            description: `Portafolio de Jesús David Bossa. Aqui comparto mi experiencia dando a conocer mis proyectos y como es mi forma de trabajo`,
            start_url: `/es`,
          },
        ],
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
