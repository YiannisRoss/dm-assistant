import React from "react"
import PropTypes from "prop-types"
class CharacterWindow extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { character } = this.props;

        return (
            <React.Fragment>
                <div>

                    <h2>{character.name}</h2>
                    <h3>Stats</h3>
                    <p>{character.stats}</p>
                    <h3>Description</h3>
                    <p>{character.description}</p>
                    <button onClick={() => { console.log(character) }}>show char details</button>
                    <img src={character.image}></img>
                </div>


            </React.Fragment>
        );
    }
}

CharacterWindow.propTypes = {
    character: PropTypes.object,

};
export default CharacterWindow
