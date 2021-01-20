const linkResolver = require("./src/utilities/linkResolver")

module.exports = {
  siteMetadata: {
    title: `Bryan White, Web Developer`,
    description: `Bryan White is a New Hampshire-based web and UI developer who specializes in React.js and Gatsby`,
    author: `Bryan White`,
    siteUrl: `https://www.bryanjwhite.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'bryanjsite',
        accessToken: 'MC5ZQVlsTEJNQUFDWUFxdEZK.Je-_vWbvv71877-977-977-977-9M0EW77-977-9f--_ve-_vTM1B--_vQnvv70S77-977-977-977-977-977-977-977-9',
        prismicToolbar: false,
        linkResolver: () => linkResolver,
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children,
        ) => {
          
        },
        // Remember, the schema names in the object have to match the API ID
        schemas: {
          page: require("./src/schemas/page.json"),
        },
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 50,
        },
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
      },
    },
    {
      resolve: "gatsby-plugin-guess-js",
      options: {
        GAViewID: `236013635`,
        jwt: {
          client_email: "bryanwhite@bryanjsite.iam.gserviceaccount.com",
          private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDaE9D0Mygz6MME\ngJa0GT/KAj92uSalNNwk4I1nNQrWFgLmWfs+SxW3uDfDN8aY6bHGTdgNQU0a8iaO\n1qEzV/qZlSQIk1tptO6jM/4+Sg2eUPqF1NXPr6iNrl//f+J9IU/OzAabRaHkWxwu\n3umMGS512rFvggNp1d913XjdIWOz5iNCJ3a6iaU4MIppNyMx1XHStC4rl2tm7pxk\nCIlpOVPeRDxCrzlwCxysTOfrEbt0egbPqE9gu85+bvvdKg5POn9foe5bQp83nJ8+\nkUTP0/BSLvHmEJLkXldbdMEganRJ2c+kVQmWJqBHNBL8WI4pjomM//nLBwZXCR5x\nt1swJU6vAgMBAAECggEACAShuaftat8uLOAlsXeaot6An2iWVTgf8DaAuq7Ev0iu\nAoD2He7VI8ChCgQuB/WZ6/zm1THuZlNJCfn9PBiKLROJqXZjw8K0cCXUS6LIZJ+Z\neubE60tTJ1vCdCjV8yqe4b2MU/gtK7HZqSWDIt9hCcO2+L0Z2c5GOgA9VlcscHL3\naKvJDuRTcsrniDtIU7vUITMlsxvkkiOkNDpP3AUQj6iSOHZG2cGpIl8/Y927bl2s\nGaGwJHH+oHrDAE0YjRF3hXmsP/tbnGarT5/VdB4qyed1QancmmU6mii6winv+w1T\ncSkRQyjSmkb0WT2bpmWuoPpWusnLE7dWssjaIAdVmQKBgQDxb7501XsuJHRelxCr\nMlzhvFZ/zcv1d2KaRMM31EHt9ZbwR80EPZao+/tKOF8zwqXqFsYIB39X7JTvC9ow\nDCgZ3k+zNHg6+4oiCLplfOJ/mabs0RVpzuyExmk5PwDQPMKwwC8HO1IGzn5A/dvl\nsNq8ExEzs8LsY7CMPTCpR0TxKQKBgQDnO1ycokpRzCTj+D1eiiV6oSiKq+/pbaZ/\nKIkh81og/mCdhED4pFgh7T+3TUh2vqGmtweL0ZTD+yMHLJwuzIvMDUFzVjE2HDqn\nvxZtA3rF3ZbV0js5oUysgC/ABcqQjpbh22l+DHBkYC+hU6HQFMnc1bL0pX210TXP\nT29rhpcEFwKBgQDSwpNl9j4Tp6sWL5VTfSFrxTdVVddoLpGazdAE2nu7OJpMosEr\npH/ygBV7Uv54dsDTOpIgzDq0DEhu7M/JBbOz8Udtzq3t/0s0Lp5Ync4zSXRYYqTo\nusPpnDKa0I7rOT9TgFENZRFT88pu/ayKM/qeF576nT/Zj6S8p2XlP9vFEQKBgQCn\naLrsTDMydXJf+mG0CKCJ4BPSEhloDxL0DQz7n4wpRwH8CLxhR9rm9TWkKDfGgM3Y\nPbsg52OlYDVEBHAvEbhEy3QPZN/MJTPyLs61rkc86elCdSqb1sQEP+pSQ98cOZ/T\ndV8y+x6EDX9udXY5iFN9ptohdY9GC2nB5ejtGExNkQKBgHlA8Frn8Url5ACZBnmS\nrra8NPwhS7os6JJoP0NOeWx/QlAS8L9mvdxFlsnt3wo6ukgC7AgzXsO39/CX0hZW\nTWyOnOPydEoD2DmK3WDDnY5V6krSILB1t/qCaNLZE8L405sU2TxZKSAxerFuYmIn\nTdO6kmXsmuQDyFVdB3YwVlrj\n-----END PRIVATE KEY-----\n",
        },
        minimumThreshold: 0.03,
        period: {
          startDate: new Date("2018-1-1"),
          endDate: new Date(),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167309418-2",
        head: false,
        pageTransitionDelay: 0,
        defer: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MWZFZ66',
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "gatsby-route-change",
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bryan J Site',
        short_name: 'bryanjsite',
        start_url: '/',
        background_color: '#000',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [
          '/preview',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: '',
        policy: [{
          userAgent: '*',
          allow: '/',
        }],
        output: '/robots.txt',
        sitemap: 'https://www.bryanjwhite.com/sitemap.xml'
      },
    },   
    `gatsby-plugin-svgr`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Open Sans"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: `e7c39cbf6e264faabc2479e4c7b17237`,
        clientSecret: `00494ff95af34cfb8dba00076a043982`,
        refreshToken: `AQCuu5V5Rhw0S_KaCKcYeRJPjY8vVQGyoL4F7S4LLkPOSJK-8WlBBHvj_anYaMQezQ9QlBSwTt3R2j5A6TuzQ5WT_6q9EUJuCvLF7KC5qFsQBSNpO9dFALmLzprEl_UrEK8`,
    
        fetchPlaylists: false,
        fetchRecent: true,
        timeRanges: ['short_term', 'medium_term', 'long_term'],
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
