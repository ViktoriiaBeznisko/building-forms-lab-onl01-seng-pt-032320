// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleChange = (event) => {
    this.setState({
        name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const band = { name: this.state.name}
    this.props.addBand(band)
    this.setState({
        name: ""
    })

}

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default BandInput
