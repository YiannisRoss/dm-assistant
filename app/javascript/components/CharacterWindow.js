import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/CharacterWindow/CharacterWindow.scss"

class CharacterWindow extends React.Component {
    constructor(props) {
        super(props);


    }

    makeDescriptionEditable() {

        console.log(`makeDescriptionEditable called on ${this.props.character.name}`)

        //use ref to get character description element
        //set to hidden

        //create text input field
        //PATCH request to backend to update char
    }

    render() {
        const { character, charImageURL } = this.props;
        const characterDescriptionDiv = <div>
            <h3>Description</h3>
            <p id="character-description" className="character-attributes" onDoubleClick={() => {
                console.log(character.name + ' description doubleclicked')
                this.makeDescriptionEditable()
            }}>{character.description}</p>
        </div>
        const characterStatsDiv = <div>
            <h3>Stats</h3>
            <p className="character-attributes">{character.stats}</p>

        </div>
        return (
            <React.Fragment>
                <div className="character-window-div">
                    <div className="character-header">

                        <img src={charImageURL} className="character-img"></img>
                        <h2>{character.name}</h2>
                    </div>
                    <button className="hide-button" onClick={() => {
                        this.props.minimizeCharacterWindow(character)

                    }}>Hide</button>
                    {character.stats && characterStatsDiv}
                    {character.description && characterDescriptionDiv}


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
