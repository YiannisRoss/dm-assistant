import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar";
import CharacterWindow from "./CharacterWindow";
import MapWindow from "./MapWindow.js";

class GameTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: this.props.characters,
      maps: this.props.maps,
      characterWindowsList: [],
      mapWindowsList: [],
      pinnedPanels: []
    };

    this.pinnedPanelsRef = React.createRef();
    this.togglePinPanel = this.togglePinPanel.bind(this);


    this.minimizeCharacterWindow = this.minimizeCharacterWindow.bind(this);
    this.minimizeMapWindow = this.minimizeMapWindow.bind(this);
    this.createDefaultCharacter = this.createDefaultCharacter.bind(this);
    this.createCharacterWindow = this.createCharacterWindow.bind(this);
    this.createMapWindow = this.createMapWindow.bind(this);
    this.state.characters.map((character) => character.isActivated = false)
    this.props.maps.map((map) => map.isActivated = false)
  }
  async getCharacters() {
    fetch(`/api/v1/characters.json`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET'
    }).then(response => response.json())
      .then(charactersData => {
        this.setState({
          characters: charactersData
        })
      })
  }

  async getMaps() {
    fetch(`/api/v1/maps.json`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET'
    }).then(response => response.json())
      .then(mapsData => {
        this.setState({
          maps: mapsData
        })
      })
  }

  async createDefaultCharacter() {
    console.log('creating default char')
    let defaultCharacter = {
      name: 'default char name',
      user_id: this.props.current_user.id,
      description: '',
      stats: ''
    }

    fetch(`/api/v1/characters`, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector("meta[name='csrf-token']").getAttribute("content")
      },
      method: 'POST',
      body: JSON.stringify({
        character: defaultCharacter
      })
    }).then(response => response.json())
      .then(response => this.getCharacters())

  }

  createCharacterWindow(character) {
    if (character.isActivated) {
      console.log(`${character.name} has already been selected`)
      return
    }
    character.isActivated = true

    let newCharacterWindow = <CharacterWindow
      key={character.id}
      character={character}
      minimizeCharacterWindow={this.minimizeCharacterWindow} />;

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

    let newMapWindow = <MapWindow
      key={map.id} map={map}
      mapImageURL={this.props.mapImageURLs[map.id - 1]}
      minimizeMapWindow={this.minimizeMapWindow} />;

    this.setState({
      mapWindowsList: this.state.mapWindowsList.concat(newMapWindow)
    });
  }

  minimizeCharacterWindow(character) {

    for (let i = 0; i < this.state.characterWindowsList.length; i++) {
      if (this.state.characterWindowsList[i].key == character.id) {
        character.isActivated = false
        let newCharacterWindowsList = this.state.characterWindowsList
        let index = newCharacterWindowsList.indexOf(newCharacterWindowsList[i])
        newCharacterWindowsList.splice(index, 1)
        this.setState({
          characterWindowsList: newCharacterWindowsList
        })
        this.getCharacters()
        return
      }

    }
    console.log('minimize character window is getting characters')
    getCharacters()
  }

  minimizeMapWindow(map) {
    for (let i = 0; i < this.state.mapWindowsList.length; i++) {
      if (this.state.mapWindowsList[i].key == map.id) {
        map.isActivated = false
        let newMapWindowsList = this.state.mapWindowsList
        let index = newMapWindowsList.indexOf(newMapWindowsList[i])
        newMapWindowsList.splice(index, 1)
        this.setState({
          mapWindowsList: newMapWindowsList
        })
        return
      }
      this.getMaps()
    }
  }

  togglePinPanel(panel) {
    console.log(panel)
    console.log('cloning panel...')
    // let unpinButton = <button onClick={() => togglePinPanel(panel)}>Unpin</button>
    // let newPanel = React.cloneElement(panel.current, [{ togglePinPanel=this.togglePinPanel(panel) }], [unpinButton])
    console.log(newPanel)

    let newPanel = panel.current.cloneNode(true)

    newPanel.removeChild(newPanel.children[newPanel.children.length - 1])
    newPanel.removeChild(newPanel.children[newPanel.children.length - 1])

    if (this.pinnedPanelsRef.current.innerHTML.includes(newPanel.innerHTML)) {
      console.log('replacing')
      this.pinnedPanelsRef.current.innerHTML = this.pinnedPanelsRef.current.innerHTML.replace(newPanel.innerHTML, "")

    }
    else {
      console.log(newPanel)

      console.log('adding')
      this.pinnedPanelsRef.current.innerHTML += newPanel.innerHTML
      // console.log('unpin button')
      // console.log(unpinButton)
      // this.pinnedPanelsRef.current.innerHTML += unpinButton
    }
  }

  resetPins() {


    this.pinnedPanelsRef.current.innerHTML = ''

  }

  render() {



    return (
      <React.Fragment>
        <div id='container'>
          <Navbar characters={this.state.characters}
            maps={this.state.maps}
            createCharacterWindow={this.createCharacterWindow}
            createMapWindow={this.createMapWindow}
            createDefaultCharacter={this.createDefaultCharacter}
            togglePinPanel={this.togglePinPanel}
          />
          <div id='tracker-contents'>
            <div id='windows-container'>
              <div id="map-windows-list-container">
                {this.state.mapWindowsList}
              </div>
              <div id="character-windows-list-container">
                {this.state.characterWindowsList}
              </div>
            </div>

            <div id='pinned-panels-container' >
              <button onClick={() => { this.resetPins() }}>Clear pins</button>
              <h2>Pinned Panels</h2>
              <div id='pinned-panels' ref={this.pinnedPanelsRef}></div>

              {/* {
                this.state.pinnedPanels} */}

            </div>



          </div>
        </div>
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
