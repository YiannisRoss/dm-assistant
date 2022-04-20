import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/Navbar.scss"
import DropdownExpandable from "./DropdownExpandable";
class Navbar extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { createMapWindow, createCharacterWindow, createDefaultCharacter } = this.props;
        const listCharacters = this.props.characters.map((character) =>

            <option key={character.id} onClick={() => {
                createCharacterWindow(character)
            }
            }> {character.name} </option>
        )

        const listMaps = this.props.maps.map((map) =>
            <option key={map.id} onClick={() => {
                createMapWindow(map)
            }
            } > {map.title} </ option>
        )

        return (
            <React.Fragment>
                <div id='navbar-container'>


                    <DropdownExpandable
                        dropdownOptions={this.props.characters}
                        arrayName={'Characters'}
                        createWindow={createCharacterWindow}
                        createDefaultOption={createDefaultCharacter}
                    />
                    <DropdownExpandable
                        dropdownOptions={this.props.maps}
                        arrayName={'Maps'}
                        createWindow={createMapWindow}
                        createDefaultOption={createDefaultCharacter} //switch to map

                    />

                    {/* <select>
                        {listCharacters}
                    </select>

                    <select>
                        {listMaps}
                    </select> */}
                </div>

            </React.Fragment>
        );
    }
}

Navbar.propTypes = {
    characters: PropTypes.array,
    maps: PropTypes.array
};
export default Navbar
