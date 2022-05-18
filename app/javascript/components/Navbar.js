import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/Navbar.scss"
import DropdownExpandable from "./DropdownExpandable";
import EquipmentPanel from "./EquipmentPanel";
import SpellsPanel from "./SpellsPanel";
import ConditionsPanel from "./ConditionsPanel";
import ClassesPanel from "./ClassesPanel";
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { createMapWindow, createCharacterWindow, createDefaultCharacter, togglePinPanel } = this.props;

        return (
            <React.Fragment>
                <div id='navbar-container'>
                    <DropdownExpandable
                        dropdownOptions={this.props.characters}
                        arrayName={'Characters'}
                        createWindow={createCharacterWindow}
                        createDefaultOption={createDefaultCharacter}
                    />
                    <DropdownExpandable
                        dropdownOptions={this.props.maps}
                        arrayName={'Maps'}
                        createWindow={createMapWindow}
                        createDefaultOption={() => { window.open("/maps/new", "_blank") }}
                    />
                    <EquipmentPanel
                        togglePinPanel={togglePinPanel} />
                    <SpellsPanel togglePinPanel={togglePinPanel} />
                    <ConditionsPanel togglePinPanel={togglePinPanel} />
                    <ClassesPanel togglePinPanel={togglePinPanel} />
                    <button onClick={() => {
                        console.log('getting aws')
                        let AWSData = fetch(`https://dm-assistant-bucket-test1.s3.eu-west-3.amazonaws.com/stickcharacter.png`, {
                            headers: {
                                // 'Content-Type': 'application/json',
                                // 'Host': 's3.eu-west-3.amazonaws.com',
                                // 'cors': 'cors'
                            }
                        }).then(response => response.json())
                        console.log(AWSData)

                    }}>get aws</button>
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
