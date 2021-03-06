import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/CharacterWindow/CharacterWindow.scss"

class CharacterWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNameUnderEdit: false,
            isStatsUnderEdit: false,
            isDescriptionUnderEdit: false,
            character: this.props.character
        };
        this.nameInput = React.createRef();
        this.descriptionInput = React.createRef();
        this.statsInput = React.createRef();

    }

    async updateCharacterData() {
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        let newCharacter = this.state.character
        this.nameInput.current == null ? newCharacter.name = this.state.character.name : newCharacter.name = this.nameInput.current.value
        this.descriptionInput.current == null ? newCharacter.description = this.state.character.description : newCharacter.description = this.descriptionInput.current.value
        this.statsInput.current == null ? newCharacter.stats = this.state.character.stats : newCharacter.stats = this.statsInput.current.value

        this.setState({
            character: newCharacter
        })

        fetch(`/api/v1/characters/${this.state.character.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrf
            },
            method: 'PATCH',
            body: JSON.stringify({
                character: newCharacter
            })
        }).then(response => response.json())
            .then(newCharacterData => {
                this.setState({
                    character: newCharacterData
                })
            })
    }
    toggleNameEditable() {
        this.setState({
            isNameUnderEdit: !this.state.isNameUnderEdit
        })
        if (this.state.isNameUnderEdit) {
            this.updateCharacterData()
        }
    }
    toggleDescriptionEditable() {
        this.setState({
            isDescriptionUnderEdit: !this.state.isDescriptionUnderEdit
        })
        if (this.state.isDescriptionUnderEdit) {
            this.updateCharacterData()
        }
    }
    toggleStatsEditable() {
        this.setState({
            isStatsUnderEdit: !this.state.isStatsUnderEdit
        })
        if (this.state.isStatsUnderEdit) {
            this.updateCharacterData()
        }
    }



    render() {

        const { character, isDescriptionUnderEdit, isStatsUnderEdit, isNameUnderEdit } = this.state;

        const characterNameHeader = <h2 onDoubleClick={() => {
            this.toggleNameEditable()

        }}>{character.name}</h2>
        const characterNameInput = <div>
            <textarea ref={this.nameInput} defaultValue={character.name} /> <button onClick={() => {
                this.toggleNameEditable()

            }}>Submit</button></div>
        const characterDescriptionDiv = <div>
            <h3>Description</h3>
            <p id="character-description" className="character-attributes" onDoubleClick={() => {

                this.toggleDescriptionEditable()
            }}>{character.description}</p>
        </div>

        const characterDescriptionInput = <div>
            <textarea ref={this.descriptionInput} defaultValue={character.description} /> <button onClick={() => {
                this.toggleDescriptionEditable()

            }}>Submit</button></div>

        const characterStatsDiv = <div>
            <h3>Stats</h3>
            <p className="character-attributes" onDoubleClick={() => {
                this.toggleStatsEditable()
            }}>{character.stats}</p>
        </div>
        const characterStatsInput = <div>
            <textarea ref={this.statsInput} defaultValue={character.stats} /> <button onClick={() => {
                this.toggleStatsEditable()

            }}>Submit</button></div>

        return (
            <React.Fragment>
                <div className="character-window-div">
                    <div className="character-header">
                        <img src={character.image_url} className="character-img"></img>
                        {!isNameUnderEdit && characterNameHeader}
                        {isNameUnderEdit && characterNameInput}
                    </div>
                    <button className="hide-button" onClick={() => {
                        this.props.minimizeCharacterWindow(this.props.character)

                    }}>Hide</button>
                    {!isStatsUnderEdit && characterStatsDiv}
                    {isStatsUnderEdit && characterStatsInput}
                    {(character.description && !isDescriptionUnderEdit) && characterDescriptionDiv}
                    {isDescriptionUnderEdit && characterDescriptionInput}

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
