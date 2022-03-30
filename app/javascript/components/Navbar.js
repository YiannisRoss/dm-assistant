import React from "react"
import PropTypes from "prop-types"
"../../assets/stylesheets/Navbar.scss"
class Navbar extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { createMapWindow, createCharacterWindow } = this.props;
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

                    <select>
                        {listCharacters}
                    </select>

                    <select>
                        {listMaps}
                    </select>
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
