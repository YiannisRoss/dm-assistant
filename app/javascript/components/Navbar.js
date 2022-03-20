import React from "react"
import PropTypes from "prop-types"
class Navbar extends React.Component {


    render() {

        const listCharacters = this.props.characters.map((character) =>

            <option key={character.id} onClick={function () {
                createCharacterWindow(character)
            }
            }> {character.name} </option>
        )

        const listMaps = this.props.maps.map((map) =>
            <option key={map.id} onClick={function () {
                createMapWindow(map)
            }} > {map.title} </ option>
        )

        function createCharacterWindow(character) {

            console.log(`createCharacterWindow called on character ${character.name}`)
        }
        function createMapWindow(map) {

            console.log(`createMapWindow called on map ${map.title}`)
        }
        return (
            <React.Fragment>

                <h2>Navbar</h2>
                <select>
                    {listCharacters}
                </select>

                <select>
                    {listMaps}
                </select>

            </React.Fragment>
        );
    }
}

Navbar.propTypes = {
    characters: PropTypes.array,
    maps: PropTypes.array
};
export default Navbar
