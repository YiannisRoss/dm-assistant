import React from "react"
import PropTypes from "prop-types"
import Navbar
  from "./Navbar";
class GameTracker extends React.Component {


  render() {
    return (
      <React.Fragment>
        <Navbar characters={this.props.characters} maps={this.props.maps} />

        {console.log(this.props.characters)}
        {console.log(this.props.maps)}


      </React.Fragment>
    );
  }
}

GameTracker.propTypes = {
  characters: PropTypes.array,
  maps: PropTypes.array
};
export default GameTracker
