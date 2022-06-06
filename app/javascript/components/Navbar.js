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
        let charactersPanel = <DropdownExpandable
            dropdownOptions={this.props.characters}
            arrayName={'Characters'}
            createWindow={createCharacterWindow}
            createDefaultOption={createDefaultCharacter}
        />
        let mapsPanel = <DropdownExpandable
            dropdownOptions={this.props.maps}
            arrayName={'Maps'}
            createWindow={createMapWindow}
            createDefaultOption={() => { window.open("/maps/new") }}
        />
        return (
            <React.Fragment>
                <div id='navbar-container'>
                    {this.props.current_user && charactersPanel}
                    {this.props.current_user && mapsPanel}

                    <EquipmentPanel
                        togglePinPanel={togglePinPanel} />
                    <SpellsPanel togglePinPanel={togglePinPanel} />
                    <ConditionsPanel togglePinPanel={togglePinPanel} />
                    <ClassesPanel togglePinPanel={togglePinPanel} />

                    <div id="navbar-home-button" onClick={() => {
                        if (confirm("Are you sure?")) {
                            window.open("/", "_self")
                        }

                    }}>Home</div>

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