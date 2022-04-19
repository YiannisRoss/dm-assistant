import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/CharacterWindow/CharacterWindow.scss"

class CharacterWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDescriptionUnderEdit: false,
            character: this.props.character
        };
        this.textInput = React.createRef();
    }

    async updateCharacterData() {
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        let newDescription = this.textInput.current.value;
        fetch(`/api/v1/characters/${this.state.character.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrf
            },
            method: 'PATCH',
            body: JSON.stringify({
                character: {
                    description: newDescription
                }
            })
        }).then(response => response.json())
            .then(newCharacterData => {
                this.setState({
                    character: newCharacterData
                })
            })
    }

    toggleDescriptionEditable() {
        this.setState({
            isDescriptionUnderEdit: !this.state.isDescriptionUnderEdit
        })
        //PATCH request to backend to update char
        if (this.state.isDescriptionUnderEdit) {
            this.updateCharacterData()
        }


    }


    render() {
        const { charImageURL } = this.props;
        const { character, isDescriptionUnderEdit } = this.state;

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
                        this.props.minimizeCharacterWindow(this.props.character)
                        console.log(character)
                    }}>Hide</button>
                    {character.stats && characterStatsDiv}
                    {(character.description && !isDescriptionUnderEdit) && characterDescriptionDiv}
                    {isDescriptionUnderEdit && characterDescriptionInput}
                    <button onClick={() => {
                        console.log(this.state)
                    }}>STATE</button>
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
