module.exports = {
  siteMetadata: {
    title: `Fundacja Mieć Pasje`,
    description: `Głównym celem jest działalność kulturalna z zakresu sztuki oraz ochrony dóbr kultury i dziedzictwa narodowego, wspieranie rozwoju twórczości ludowej, rzemieślniczej i rękodzieła a także odtwarzanie dorobku ginących zawodów.`,
    author: `@k7grzywacz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fundacja Mieć Pasje`,
        short_name: `Mieć Pasje`,
        start_url: `/`,
        background_color: `#ff6348`,
        theme_color: `#ff6348`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `7b62658a4308ba3f455b4f15066d22`,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-YH5D11MGEL', // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
