import React from 'react'
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import usePreviewData from '../utilities/UsePreviewData'
import Layout from '../components/layout'
import SEO from "../components/seo"
import SliceZone from '../components/SliceZone/SliceZone'

const Page = ({ data: { prismicPage, pages }}) => {
  const { data } = prismicPage
  const liveData = usePreviewData(data)

  return (
    <Layout>
      <SEO title={prismicPage.uid} />
      <Helmet>
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=bryanjsite"></script>
      </Helmet>
      <SliceZone allSlices={liveData.body} />
    </Layout>
  )
}

export default withPreview(Page)

export const pageQuery = graphql`
query MyQuery($uid: String!) {
  prismicPage(uid: { eq: $uid }) {
    uid
    id
    data {
      body {
        ... on PrismicPageBodyHero {
          id
          primary {
            hero_copy {
              html
            }
            background_image {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
          }
          slice_type
        }
        ... on PrismicPageBody3Up {
          id
          items {
            three_up_block {
              html
            }
            three_up_image {
              alt
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
          }
          slice_type
          primary {
            three_up_title {
              html
            }
          }
        }
        ... on PrismicPageBodySpotify {
          id
          primary {
            spotify_title {
              text
            }
          }
          slice_type
        }
        ... on PrismicPageBodyOneColumn {
          id
          slice_type
          primary {
            one_col_body {
              html
            }
            one_col_bg_image {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
      }
    }
`