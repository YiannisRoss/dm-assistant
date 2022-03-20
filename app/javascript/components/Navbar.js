import React from "react"
import PropTypes from "prop-types"
class Navbar extends React.Component {


    render() {

        const listCharacters = this.props.characters.map((character) =>
            <div>
                <li>{character.name}</li>
            </div>);
        const listMaps = this.props.maps.map((map) =>
            <div>
                <li>{map.name}</li>
            </div>);
        return (
            <React.Fragment>

                <h2>Navbar</h2>
                {listCharacters}
                {listMaps}

            </React.Fragment>
        );
    }
}

Navbar.propTypes = {
    characters: PropTypes.array,
    maps: PropTypes.array
};
export default Navbar
