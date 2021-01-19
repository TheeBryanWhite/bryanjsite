const linkResolver = require("./src/utilities/linkResolver")

module.exports = {
  siteMetadata: {
    title: `Bryan White, Web Developer`,
    description: `Bryan White is a New Hampshire-based web and UI developer who specializes in React.js and Gatsby`,
    author: `Bryan White`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'bryanjsite',
        accessToken: 'MC5ZQVlsTEJNQUFDWUFxdEZK.Je-_vWbvv71877-977-977-977-9M0EW77-977-9f--_ve-_vTM1B--_vQnvv70S77-977-977-977-977-977-977-977-9',
        prismicToolbar: true,
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
    // {
    //   resolve: "gatsby-plugin-guess-js",
    //   options: {
    //     GAViewID: `230022083`,
    //     jwt: {
    //       client_email: "safercontact@safercontact-guess-js.iam.gserviceaccount.com",
    //       private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClBjuTIbUXOeWt\nXEJTAfHY7APVzi5IIzMGKcJKfU3KB4+xjrdcBrV0zxAILOjZrCYKMa9yy9ZJqwyH\nho9uBqkO7Zr2OY+RgTlXNu0quCIeErB+8jbVHGwwox6oG4E5vo+Z3Lx2J3t3HO+T\nxFEFXjNDM+KTeajlzNKHFdpOMdCnVAM1cny8ndNPXud6chQ/AHxJqjYuu1aMPX0s\nFu+Ogxstzr58ErOH509mOIOKuoz9ta2HcyDh/o3ZQzDo2gCeJ0DEYiFlmSD7cYU0\nuV65NbJW31wlOijlHdX3Xf+ZOGmSP70kiuqZuUewu6xg8aiES3TqRFu4pzmeURWD\nyEcBXXhbAgMBAAECggEADB5IDUbomHSjXbasfCuXyfLGJh/TUDxqSJj6cCPn3965\nE5qqWYyrxV2LQAs90ilzf0SLLYyzoL2tC6q69gmkX1J3En72ZwLGGWLdya+ARq5F\n3bY47Pwx8BeaboSoJnuZUGNgR426SFK/2R10FOCh0ENYIrV7zKkQCksPHxzgK9lZ\nbD5b34alcWjJxYsqoMa4Rh/zlpyYTQ52AsW+1iWJFkOy7+eOlWoHrRMq0bNCmhJ4\nWOaTbrKDBDDC4jFN55brhoS12BJ+qTZoO0hjiBluOHXhBfxVd0VRD/2IXjEck86S\nagZMIwHnS3F8UGH7KdL8+tHUUaXgCkmKeEtA1B9MKQKBgQDf7YeQ8sVLOB0mAr0u\nbCslgtqY/9XwCEhVxFjqqdG4zDRT9dcLNcCV4iJpQAPJZzXiGjgIpKGadh6twujR\nTSCo8AIctWteXgXAtXAYHOX2s47L4Uoy2BVMcY0w3j3a9VfCPLG+i5OS/C6qBpvw\nj0ml60NRpDsCmyNCtH9Z3/A+5QKBgQC8qPcYoFEEWS73/qmO8KVYTmPGEd/feaaV\nT/IbHN3wA8qhe+BkyafPco0n5SxvBi5NBMtexUlekTAzSSAFo7rhtq4xmxtOOK3a\nYw+Btvlh8BmOidjGzdRblDXK7Py6oTT4ttna4wFLcBH+5vwMKZNeG6dY8M31fYv6\nhbNnJcgmPwKBgBeulD7FHg51cce6VG2bbPi7nQi/Tc3j4lqHuGug6BgmKIaUoliC\nJ8ryLnd5GK1tJ+qwoSpw1tJyGY6A5YR1JrYXI/ILUb6aLPuTdLZoH/32QWzYd7Nm\n3OHHxIndhycn+U8GgjnHoyTRXNIIfudzD/PnLKhuuPruk00Tr8A+ibbtAoGAV14w\nQDlOC6N5euN2hnmvOLvkvL9eW9GscY06Y4/0v8ghuLLzcflpO0qjUAxzjV7hZk2I\nGPVoSuEV30pICBSQ4SKGfPaFqK3a5T3m2n1v9AkK7NWtjDOZ2mdCmh0x1QP+0gdr\n0FA8M0FNNCyoIMHIO1a3IxsxZjSj9HqiYGxAymUCgYA9YvA4U4cG6P7h8vmhQC80\nIOJcJQUVC1EML63i+EyzKZ4on4iUD2WH7rHa03Z7h1QSF9mZNzRTLN+Nkkl85P1Y\nxX952i1LQANCn4iPBHrxseKh9j33YjbmWiXkVLEMLu5SL+Z6fFfPwQqXPGNJoXwh\nANK1gCCwt8kfW/bv80vxVA==\n-----END PRIVATE KEY-----\n",
    //     },
    //     minimumThreshold: 0.03,
    //     period: {
    //       startDate: new Date("2018-1-1"),
    //       endDate: new Date(),
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-179234948-1",
    //     head: false,
    //     pageTransitionDelay: 0,
    //     defer: true,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'GTM-58X3Z98',
    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: "gatsby" },
    //     routeChangeEventName: "gatsby-route-change",
    //   },
    // },
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
    // `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     exclude: [
    //       '/preview',
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: '',
    //     policy: [{
    //       userAgent: '*',
    //       allow: '/',
    //     }],
    //     output: '/robots.txt',
    //     sitemap: ''
    //   },
    // },   
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
