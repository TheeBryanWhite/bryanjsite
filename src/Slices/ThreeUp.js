import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { css } from "@emotion/react"
import Helpers from '../utilities/Helpers'

let yellow = new Helpers('yellow')

const containerMargin = new Helpers(32)
const Container = styled.div`
	margin: 60px auto;
	max-width: 1440px;
	padding: 0 ${containerMargin.toRem};

	h1 {
		text-align: center;
	}
`

const Bios = styled.div`
	align-items: stretch;
	display: flex;
	flex-wrap: wrap;
`

const bioMargin = new Helpers(16)
let h2Size = new Helpers(32)
let bpMedium = new Helpers('medium')
let bpLarge = new Helpers('large')
const Bio = styled.div`
	flex: 1 auto;
	padding: 0 ${bioMargin.toRem};

	${bpMedium.respondTo()} {
		flex: 1 50%;
	}

	${bpLarge.respondTo()} {
		flex: 1 33%;
	}

	h2 {
		background-color: rgb(${yellow.defaultColors()});
		display: inline-block;
		font-size: ${h2Size.toRem};
	}
`

const BioImage = styled.div`
	height: 0;
	padding-bottom: 75%;
`

let bcPadding = new Helpers(15)
const BioContent = styled.div`
	padding: ${bcPadding.toRem};
`

const objectFit = css`
	height: 0;
	object-fit: cover;
	padding-bottom: 75%; 
`

const ThreeUp = props => {
	const compoData = props.input

	return(
		<section id="bio" className="bio">
			<Container>
				<div dangerouslySetInnerHTML={{ __html: compoData.primary.three_up_title.html }} />
				<Bios>
					{
					compoData.items.map((bio, index) => {
						const imgData = bio.three_up_image.fluid
						return(
							<Bio key={index}>
								<BioImage>
									<Img css={objectFit} fluid={imgData} />
								</BioImage>
								<BioContent dangerouslySetInnerHTML={{ __html: bio.three_up_block.html }} />
							</Bio>
						)
					})
					}
				</Bios>
			</Container>
		</section>
	)
}

export default ThreeUp