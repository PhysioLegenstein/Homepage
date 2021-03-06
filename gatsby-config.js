module.exports = {
  siteMetadata: {
    title: "Matthias Legenstein",
    titleTemplate: "%s | Matthias Legenstein",
    description: "Matthias Legenstein BSc. | Physiotherapie in Baden | Klassische Physiotherapie, Faszientherapie, Manualtherapie | Hausbesuche auf Anfrage",
    siteUrl: "https://www.physio-legenstein.at",
    image: "/logo.png",
    author: "Michael Legenstein",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sass",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://wwww.physio-legenstein.at`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
