import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { css } from "@emotion/react"
import Helpers from '../utilities/Helpers'

let black = new Helpers('black')
let yellow = new Helpers('yellow')

const containerMargin = new Helpers(32)
const Container = styled.div`
	margin: 60px auto;
	max-width: 1440px;
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

const opaqueBg = css({
	'opacity': '0.3 !important'
})

const bgBefore = css({
	'&:after': opaqueBg
})

const OneUp = props => {
	const compoData = props.input.primary
	const imageData = compoData.one_col_bg_image.fluid
	return(
		<section id="about" className="about">
			<BackgroundImage
				css={bgBefore}
				Tag="div"
				className="about-body"
				fluid={imageData}
			>
				<Container css={{'margin': '0 auto', 'padding': '60px'}}>
					<div css={{'margin': '0 auto', 'maxWidth': '800px'}} className="about-body">
						<div dangerouslySetInnerHTML={{ __html: compoData.one_col_body.html }} />
					</div>
				</Container>
			</BackgroundImage>
		</section>
	)
}

export default OneUp