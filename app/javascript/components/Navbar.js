import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/Navbar.scss"
import DropdownExpandable from "./DropdownExpandable";
import EquipmentPanel from "./EquipmentPanel";
import SpellsPanel from "./SpellsPanel";
import ConditionsPanel from "./ConditionsPanel";
import ClassesPanel from "./ClassesPanel";
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
                    <EquipmentPanel />
                    <SpellsPanel />
                    <ConditionsPanel />
                    <ClassesPanel />
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
