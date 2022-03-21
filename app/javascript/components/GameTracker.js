import React from "react"
import PropTypes from "prop-types"
import Navbar
  from "./Navbar";
import CharacterWindow from "./CharacterWindow";
class GameTracker extends React.Component {
  constructor(props) {
    super(props);

    this.createCharacterWindow = this.createCharacterWindow.bind(this);
    this.createMapWindow = this.createMapWindow.bind(this);

  }
  createCharacterWindow(character) {

    console.log(`createCharacterWindow called on character ${character.name}`)
  }
  createMapWindow(map) {

    console.log(`createMapWindow called on map ${map.title}`)
  }
  render() {
    this.props.characters.map((character) => character.isActivated = false)
    for (let i = 0; i < this.props.characters.length; i++) {
      console.log(this.props.characters[i])
    }

    function toggleCharacterWindowEnlarged() {

    }

    return (
      <React.Fragment>
        <Navbar characters={this.props.characters} maps={this.props.maps} createCharacterWindow={this.createCharacterWindow} createMapWindow={this.createMapWindow} />
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
