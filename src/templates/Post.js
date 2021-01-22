import React from 'preact'
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import usePreviewData from '../utilities/UsePreviewData'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/layout'
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Helpers from '../utilities/Helpers'

let white = new Helpers('white')
let black = new Helpers('black')
let yellow = new Helpers('yellow')
let bpLarge = new Helpers('large')

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

	h1 {
		background-color: rgb(${yellow.defaultColors()});
		color: rgb(${black.defaultColors()});
		display: inline-block;
		font-size: 6vw;
		text-align: center;

		${bpLarge.respondTo()} {
			font-size: 3vw;
		}
	}
`

const PostContainer = styled.div`
	margin: 0 auto;
	max-width: 800px;
	padding: 0 ${containerMargin.toRem};

	p:first-of-type:first-letter {
		color: #903;
		float: left;
		font-size: 80px;
		font-weight: 700;
		line-height: 60px;
		padding-top: 4px;
		padding-right: 8px;
		padding-left: 3px;
	}

	a {
		background-color: rgb(${yellow.defaultColors()});
		color: rgb(${black.defaultColors()});
		text-decoration: none;

		&:hover,
		&:focus {
			text-decoration: underline;
		}
	}
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

const Post = ({ data: { prismicPost, posts }}) => {
  const { data } = prismicPost
  const liveData = usePreviewData(data)
  const imageData = liveData.post_featured_image.localFile.childImageSharp.fluid

  return (
    <Layout>
		<SEO 
			description={liveData.post_excerpt.text}
			title={`Bryan White Blog | ${liveData.post_title.text}`}
			image={liveData.post_featured_image.localFile.childImageSharp.original.src}
		/>
		<Helmet>
			<script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=bryanjsite"></script>
		</Helmet>
		<BackgroundImage
			css={positionRel}
			Tag="div"
			className="featured-image"
			fluid={imageData}
			fadeIn={false}
			loading="eager"
		>
			<Overlay />
			<Container>
				<div className="container-inner">
					<h1 dangerouslySetInnerHTML={{ __html: liveData.post_title.text }} />
				</div>
			</Container>
		</BackgroundImage>
		<article>
			<PostContainer css={{'margin': '0 auto', 'maxWidth': '800px', 'padding': '60px'}}>
				<div className="article-body">
					<div dangerouslySetInnerHTML={{ __html: liveData.post_body.html }} />
				</div>
			</PostContainer>
		</article>
    </Layout>
  )
}

export default withPreview(Post)

export const postQuery = graphql`
	query postsQuery($uid: String!) {
		prismicPost(uid: { eq: $uid }) {
			id
			uid
			url
			first_publication_date
			data {
				post_body {
					html
				}
				post_excerpt {
					html
					text
				}
				post_featured_image {
					localFile {
						childImageSharp {
							fluid(maxWidth: 1920) {
								...GatsbyImageSharpFluid
							}
							original {
								src
							}
						}
					}
				}
				post_title {
					text
				}
			}
		}
	}
`