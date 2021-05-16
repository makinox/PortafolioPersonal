module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Jesús David Bossa | Portfolio`,
    author: `Jesús David Bossa`,
    siteUrl: 'https://jesusbossa.dev/',
    keywords: ['Portafolio', 'Portfolio', 'Tech', 'Jesus bossa', 'Jesus david bossa'],
    image: '/preview.png',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300,400,500`, `Open Sans\:300,400,500`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
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
