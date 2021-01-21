import React from "preact"
import { graphql, useStaticQuery } from 'gatsby'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import BackgroundImage from 'gatsby-background-image'
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Helpers from '../utilities/Helpers'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Page from '../templates/Page'

let white = new Helpers('white')
let black = new Helpers('black')
let yellow = new Helpers('yellow')

const containerMargin = new Helpers(32)
const Container = styled.div`
	align-items: center;
	color: rgb(${white.defaultColors()});
	display: flex;
	height: 100vh;
	margin: 0 auto;
	max-width: 1440px;
	padding: 0 ${containerMargin.toRem};
	position: relative;
	text-transform: uppercase;
	z-index: 1;
`

const Overlay = styled.div`
	background-color: rgba(${black.defaultColors()}, 0.5);
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
`

const positionRel = css`
	position: relative;
`

const linkStyle = css `
  background-color: rgb(${yellow.defaultColors()});
  color: rgb(${black.defaultColors()});
  text-decoration: none;
`

const linkUnderline = css({
  'textDecoration': 'underline'
})

const linkHover = css({
  '&:hover,&:focus': linkUnderline
})

const NotFoundPage = () => {
  const data = useStaticQuery(
		graphql`
		query {
			desktop: file(relativePath: { eq: "tyler-quiring-T5Ye7puWZxo-unsplash.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1920) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)
  const imageData = data.desktop.childImageSharp.fluid
  
  return(
    <Layout>
      <SEO title="404: Not found" />
      <BackgroundImage
			css={positionRel}
			Tag="section"
			className="hero"
			fluid={imageData}
			backgroundColor={`#040e18`}
		>
			<Overlay />
      <Container>
        <div className="container-inner">
          <h1>Quoth the Raven, 404</h1>
          <p>Deep into that darkness peering, long I stood there wondering, fearing,<br />Doubting, dreaming dreams no mortal ever dared to dream before;</p>
          <p><small><span>Photo by <a css={[linkStyle, linkHover]} href="https://unsplash.com/@tylerdq?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tyler Quiring</a> on <a css={[linkStyle, linkHover]} href="https://unsplash.com/s/photos/raven?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></small></p>
        </div>
      </Container>
		</BackgroundImage>
    </Layout>
  )
}

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
	templateMap: {
	  page: Page
	},
  })
