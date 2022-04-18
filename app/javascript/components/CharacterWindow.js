import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/CharacterWindow/CharacterWindow.scss"

class CharacterWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDescriptionUnderEdit: false };
        this.textInput = React.createRef();
    }

    toggleDescriptionEditable() {

        console.log(`toggleDescriptionEditable called on ${this.props.character.name}`)


        this.setState({
            isDescriptionUnderEdit: !this.state.isDescriptionUnderEdit
        })
        //PATCH request to backend to update char
    }

    render() {
        const { character, charImageURL } = this.props;

        const characterDescriptionDiv = <div>
            <h3>Description</h3>
            <p id="character-description" className="character-attributes" onDoubleClick={() => {
                console.log(character.name + ' description doubleclicked')
                this.toggleDescriptionEditable()
            }}>{character.description}</p>
        </div>

        const characterDescriptionInput = <div>
            <input type="text" ref={this.textInput} defaultValue={character.description} /> <button onClick={() => {
                this.toggleDescriptionEditable()

            }}>Submit</button></div>

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
                    {(character.description && !this.state.isDescriptionUnderEdit) && characterDescriptionDiv}
                    {this.state.isDescriptionUnderEdit && characterDescriptionInput}

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
