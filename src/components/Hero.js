import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Helpers from '../utilities/Helpers'

let yellow = new Helpers('yellow')
yellow = yellow.defaultColors()
let black = new Helpers('black')
black = black.defaultColors()

const containerMargin = new Helpers(32)
const Container = styled.div`
	align-items: center;
	color: rgb(${black});
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
	background-color: rgba(${black}, 0.5);
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
`

let bpLarge = new Helpers('large')
bpLarge = bpLarge.respondTo()
const Heading = styled.h1`
	background-color: rgb(${yellow});
	display: inline-block;
	font-size: 6vw;

	${bpLarge} {
		font-size: 3vw;
	}
`

const positionRel = css`
	position: relative;
`

const Hero = () => {
	const data = useStaticQuery(
		graphql`
		query {
			desktop: file(relativePath: { eq: "vader.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1920) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)
	const imageData = data.desktop.childImageSharp.fluid


	return (
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
					<Heading>Hi! I'm Bryan White</Heading>
					<h2>I'm a website developer<br />a UI developer<br />&amp; a righteous dude</h2>
					<h3>Specializing in Gatsby.js<br />React.js<br />&amp; React Native</h3>
				</div>
			</Container>
		</BackgroundImage>
	)
}

export default Hero