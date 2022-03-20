import React from "react"
import PropTypes from "prop-types"
import Navbar
  from "./Navbar";
import CharacterWindow from "./CharacterWindow";
class GameTracker extends React.Component {


  render() {
    return (
      <React.Fragment>
        {console.log(this.props.characters)}
        {console.log(this.props.maps)}
        <Navbar characters={this.props.characters} maps={this.props.maps} />
        <CharacterWindow />



      </React.Fragment>
    );
  }
}

GameTracker.propTypes = {
  characters: PropTypes.array,
  maps: PropTypes.array
};
export default GameTracker
