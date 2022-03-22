import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/CharacterWindow/CharacterWindow.scss"

class CharacterWindow extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { character, charImageURL } = this.props;
        const characterDescriptionDiv = <div>
            <h3>Description</h3>
            <p id="character-description" className="character-attributes">{character.description}</p>
        </div>
        const characterStatsDiv = <div>
            <h3>Stats</h3>
            <p className="character-attributes">{character.stats}</p>

        </div>
        return (
            <React.Fragment>
                <div className="character-window-div">

                    <h2>{character.name}</h2> <button onClick={() => {
                        this.props.minimizeCharacterWindow(character)
                    }}>Hide</button>
                    {character.stats && characterStatsDiv}
                    {character.description && characterDescriptionDiv}

                    <img src={charImageURL} className="character-img"></img>
                </div>


            </React.Fragment>
        );
    }
}

CharacterWindow.propTypes = {
    character: PropTypes.object,
    charImageURL: PropTypes.string
};
export default CharacterWindow
