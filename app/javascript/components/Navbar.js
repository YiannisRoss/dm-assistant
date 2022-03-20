import React from "react"
import PropTypes from "prop-types"
class Navbar extends React.Component {


    render() {

        const listCharacters = this.props.characters.map((character) =>

            <option> {character.name} </option>
        )

        const listMaps = this.props.maps.map((map) =>
            <option> {map.title} </option>
        )
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
