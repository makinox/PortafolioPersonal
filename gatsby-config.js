module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Jesús Bossa | Portfolio`,
    author: `Jesús Bossa`,
    siteUrl: 'https://jesusbossa.dev/',
    keywords: ['Portafolio', 'Portfolio', 'Tech', 'Jesus bossa', 'Jesus david bossa'],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jesús Bossa Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#67E2F7`,
        theme_color: `#67E2F7`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
        cache_busting_mode: 'none',
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
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
        dontCacheBustURLsMatching: /(\.js$|\.css$|static\/)/,
        runtimeCaching: [
          {
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `CacheFirst`,
          },
          {
            urlPattern: /^https?:.*\page-data\/.*\/page-data\.json/,
            handler: `NetworkFirst`,
          },
          {
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `StaleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Open Sans', `Roboto`],
        },
      },
    },
  ],
};
