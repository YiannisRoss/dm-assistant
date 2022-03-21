import React from "react"
import PropTypes from "prop-types"
import Navbar
  from "./Navbar";
import CharacterWindow from "./CharacterWindow";
class GameTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characterWindowsList: [] };


    this.createCharacterWindow = this.createCharacterWindow.bind(this);
    this.createMapWindow = this.createMapWindow.bind(this);

  }
  createCharacterWindow(character) {

    console.log(`createCharacterWindow called on character ${character.name}`)
    character.isActivated = true
    console.log(character)
    let newCharacterWindow = <CharacterWindow key={character.id} character={character} />;
    this.setState({
      characterWindowsList: this.state.characterWindowsList.concat(newCharacterWindow)
    });

  }
  createMapWindow(map) {

    console.log(`createMapWindow called on map ${map.title}`)
  }
  render() {
    this.props.characters.map((character) => character.isActivated = false)



    return (
      <React.Fragment>
        <Navbar characters={this.props.characters} maps={this.props.maps} createCharacterWindow={this.createCharacterWindow} createMapWindow={this.createMapWindow} />

        <div id="character-windows-list-container">
          {this.state.characterWindowsList}
        </div>


      </React.Fragment>
    );
  }
}

GameTracker.propTypes = {
  characters: PropTypes.array,
  maps: PropTypes.array
};
export default GameTracker
