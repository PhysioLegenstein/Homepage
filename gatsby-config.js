module.exports = {
  siteMetadata: {
    title: "Matthias Legenstein",
    titleTemplate: "%s | Matthias Legenstein",
    description: "Mein Name ist Matthias Legenstein und als Physiotherapeut ist mir Ihr Wohlergehen besonders wichtig. Mehr Informationen finden Sie hier auf meiner Homepage!",
    siteUrl: "https://physio-legenstein.at",
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
        siteUrl: `https://physio-legenstein.at`,
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
