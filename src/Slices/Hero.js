import React from "react"
import BackgroundImage from 'gatsby-background-image'
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

		${bpLarge.respondTo()} {
			font-size: 3vw;
		}
	}

	h2 {
		font-size: 7vw;

		${bpLarge.respondTo()} {
			font-size: 4vw;
		}
	}

	h3 {
		font-weight: 400;
		font-size: 4vw;
		text-transform: none;

		${bpLarge.respondTo()} {
			font-size: 2vw;
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

const Hero = props => {
	const compoData = props.input.primary
	const imageData = compoData.background_image.fluid

	return (
		<BackgroundImage
			css={positionRel}
			Tag="section"
			className="hero"
			fluid={imageData}
		>
			<Overlay />
			<Container>
				<div className="container-inner">
					<div dangerouslySetInnerHTML={{ __html: compoData.hero_copy.html }} />
				</div>
			</Container>
		</BackgroundImage>
	)
}

export default Hero