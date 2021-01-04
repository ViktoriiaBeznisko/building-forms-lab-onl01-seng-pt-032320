import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import { addBand } from '../reducers/manageBand'



class BandsContainer extends Component {
  render() {

    const BandsContainer = this.props.bands.map((band, i) => {
      return <li key={i}> {band.name} </li>
    })

    return(
      <div>
        < BandInput addBand={this.props.addBand}/>
        {BandsContainer}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: "ADD_BAND", payload: band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

