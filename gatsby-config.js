/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const myCustomQueries = {
  s: '(max-width: 468px)',
  l: '(min-width: 960px)',
};

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: `Shimauma`,
      description: `Shimaumaの経歴や作品をまとめたウェブサイトです。`,
      lang: `ja`,
      siteUrl: `https://qbel.netlify.app/`,
      locale: `ja_JP`,
      facebookId: `facebook`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "none",
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
          queries: myCustomQueries,
      },
    },
  ],
}
