module.exports = {
  siteMetadata: {
    title: `Bruno Carpinelli`,
    description: `Bruno Carpinelli Portofolio Page. In love with Technology!`,
    author: `@Bruno_Giovani12`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2f3640`,
        theme_color: `#fbc531`,
        display: `minimal-ui`,
        icon: `src/images/Portable-Computer-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
