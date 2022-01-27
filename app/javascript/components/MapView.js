import React from "react"
import PropTypes from "prop-types"
class MapView extends React.Component {


    constructor(props) {
        super(props)
        
    
        this.state = {
        };
      }




  render () {
    console.log("Welcome component loaded")
    return (
      <React.Fragment>
        <h1 id="map-title">{this.props.title}</h1>
        <img id="map-image" src={this.props.mapImage}></img>
      </React.Fragment>
    );
  }
}

export default MapView
