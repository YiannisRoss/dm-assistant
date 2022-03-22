import React from "react"
import PropTypes from "prop-types"
import Navbar
  from "./Navbar";
import CharacterWindow from "./CharacterWindow";
import MapWindow from "./MapWindow.js";



class GameTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterWindowsList: [],
      mapWindowsList: []
    };


    this.createCharacterWindow = this.createCharacterWindow.bind(this);
    this.createMapWindow = this.createMapWindow.bind(this);
    this.props.characters.map((character) => character.isActivated = false)
    this.props.maps.map((map) => map.isActivated = false)
  }

  createCharacterWindow(character) {


    if (character.isActivated) {
      console.log(`${character.name} has already been selected`)
      return
    }
    character.isActivated = true
    console.log(character)
    let newCharacterWindow = <CharacterWindow key={character.id} character={character} charImageURL={this.props.characterImageURLs[character.id - 1]} />;
    this.setState({
      characterWindowsList: this.state.characterWindowsList.concat(newCharacterWindow)
    });

  }
  createMapWindow(map) {

    if (map.isActivated) {
      console.log(`${map.title} has already been selected`)
      return
    }
    map.isActivated = true
    console.log(map)
    let newMapWindow = <MapWindow key={map.id} map={map} />;
    this.setState({
      mapWindowsList: this.state.mapWindowsList.concat(newMapWindow)
    });
  }


  render() {




    return (
      <React.Fragment>
        <Navbar characters={this.props.characters} maps={this.props.maps} createCharacterWindow={this.createCharacterWindow} createMapWindow={this.createMapWindow} />

        <div id="map-windows-list-container">
          {this.state.mapWindowsList}
        </div>
        <div id="character-windows-list-container">
          {this.state.characterWindowsList}
        </div>
        <button onClick={() => { console.log(this.props) }}>props</button>


      </React.Fragment>
    );
  }
}

GameTracker.propTypes = {
  characters: PropTypes.array,
  maps: PropTypes.array,
  characterImageURLs: PropTypes.array
};
export default GameTracker
