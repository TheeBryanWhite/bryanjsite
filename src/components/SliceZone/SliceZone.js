import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Hero, OneUp, ThreeUp, Spotify } from '../../Slices'

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props

    const slice = allSlices.map((slice) => {
      
      switch (slice.slice_type) {
        // These are the API IDs of the slices
        case 'hero':
        	return <Hero key={slice.id} input={slice} />
        case 'one_column':
          return <OneUp key={slice.id} input={slice} />
        case '3_up':
          return <ThreeUp key={slice.id} input={slice} />
        case 'spotify':
          return <Spotify key={slice.id} input={slice} />
        default:
        	return null
      }
    })
    return slice
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}
