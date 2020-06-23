module.exports = {
  siteMetadata: {
    title: `Somethinghitme`,
    author: {
      name: `Jason Brown`,
      summary: `Father, Veteran, lover of everything tech.`,
    },
    description: `Code, demos and ideas.`,
    siteUrl: `http://somethinghitme.com`,
    social: [
      {
        url: `https://twitter.com/loktar00`, title: `@loktar00`
      },
      {
        url: `http://codepen.io/loktar00`, title: `Codepen`
      },
      {
        url: `https://github.com/loktar00`, title: `Github`
      },
      {
        url: `https://stackoverflow.com/users/322395/loktar`, title: `Stackoverflow`
      },
      {
        url: `https://www.dwitter.net/u/loktar`, title: `dwitter`
      }
    ],
    projects: [
      {
        url: `https://github.com/loktar00/react-lazy-load`, title: `react-lazy-load`
      },
      {
        url: `https://github.com/loktar00/jest`, title: `Jest Game Framework`
      },
      {
        url: `https://codegolf.stackexchange.com/a/30335/3474`, title: `gui hacker`
      },
      {
        url: `https://github.com/loktar00/JQuery-Snowfall`, title: `jQuery Snowfall`
      },
      {
        url: `http://www.retroships.com`, title: `RetroShips`
      },
      {
        url: `http://zombiegames.net`, title: `zombiegames.net`
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-sass`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-1702440-11`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Somethinghitme.com`,
        short_name: `Somethinghitme`,
        start_url: `/`,
        background_color: `#ffffff`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
