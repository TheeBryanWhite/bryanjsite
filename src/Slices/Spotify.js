import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { css } from "@emotion/react"
import Helpers from '../utilities/Helpers'

import { ReactComponent as SVGSpotify } from '../svg/spotify.svg'

let black = new Helpers('black')
let white = new Helpers('white')
let yellow = new Helpers('yellow')
let neumorphicBg = new Helpers('neumorphicBg')
let evenRowsColor = new Helpers('evenRows')

const Spotify = props => {
	const data = useStaticQuery(
		graphql`
		query spotifyQuery {
			allSpotifyRecentTrack {
			  edges {
				node {
				  id
				  order
				  track {
					album {
					  href
					  id
					  name
					  images {
						url
					  }
					  uri
					}
					artistString
					artists {
					  href
					  id
					  name
					  type
					  uri
					}
					href
					id
					name
					type
					uri
					preview_url
					external_urls {
					  spotify
					}
				  }
				}
			  }
			}
		  }
		`
	  )
	const trackData = data.allSpotifyRecentTrack.edges

	const containerMargin = new Helpers(32)
	const Container = styled.div`
		border-radius: 40px;
		box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
		-12px -12px 24px 0 rgba(255, 255, 255, 0.5);
		margin: 60px auto;
		max-width: 800px;
		overflow: hidden;
		padding: ${containerMargin.toRem};

		a {
			color: rgb(${black.defaultColors()});
			text-decoration: none;

			&:hover,&:focus {
				text-decoration: underline;
			}
		}
	`

	const TrackList = styled.div`
		background-color: rgb(${neumorphicBg.defaultColors()});
		border-radius: 40px;
		box-shadow: inset 6px 6px 10px 0 rgba(${black.defaultColors()}, 0.2),
		inset -6px -6px 10px 0 rgba(${white.defaultColors()}, 0.5);
		padding: 1.3rem;
		max-height: 525px;
		overflow-y: scroll;
	`

	const trackPadding = new Helpers(8)
	const Track = styled.div`
		align-items: center;
		display: flex;
		padding: ${trackPadding.toRem()} 0;

		&:nth-of-type(even) {
			background-color: rgb(${evenRowsColor.defaultColors()});
		}
	`

	const imgMargin = new Helpers(32)
	const AlbumImg = styled.div`
		  margin: 0 ${imgMargin.toRem()};
	`

	const Artist = styled.p`
		background-color: rgb(${yellow.defaultColors()});
		display: inline-block;
		font-weight: 700;
		margin: 0;
	`

	const Title = styled.p`
		font-weight: 400;
		margin: 0;
	`

	const albumSize = new Helpers(14)
	const Album = styled.p`
		font-size: ${albumSize.toRem()};
		font-weight: 400;
		margin: 0;
	`

	const imgLink = css`
		display: inline-block;
	`

	const imgFit = css`
		display: block;
		margin: 0;
	`

	const iconSize = css`
		height: 45px;
		transform: translateY(5px);
		width: 45px;
	`

	const compoData = props.input.primary

	return(
		<section css={{ 'padding': `0 ${imgMargin.toRem()}` }} className="spotify">
			<Container>
				<h2 css={{ 'textAlign': 'center' }}><SVGSpotify css={iconSize} /> {compoData.spotify_title.text}</h2>

				<div className="spotify-container">
					<TrackList>
						{
							trackData.map(track => {
								return (
									<Track key={track.node.id}>
										<AlbumImg className="album-image">
											<a css={imgLink} href={track.node.track.external_urls.spotify} target="_blank" rel="noreferrer"><img css={imgFit} src={track.node.track.album.images[2].url} alt={track.node.track.album.name} /></a>
										</AlbumImg>
										<div className="album-data">
											<Artist><a href={track.node.track.external_urls.spotify} target="_blank" rel="noreferrer">{track.node.track.artistString}</a></Artist>
											<Title><a href={track.node.track.external_urls.spotify} target="_blank" rel="noreferrer">{track.node.track.name}</a></Title>
											<Album><a href={track.node.track.external_urls.spotify} target="_blank" rel="noreferrer">{track.node.track.album.name}</a></Album>
										</div>
									</Track>
								)
							})
						}
					</TrackList>
				</div>
			</Container>
		</section>
	)
}

export default Spotify