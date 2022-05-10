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
        const { createMapWindow, createCharacterWindow, createDefaultCharacter, pinPanel } = this.props;

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
                        pinPanel={pinPanel} />
                    <SpellsPanel pinPanel={pinPanel} />
                    <ConditionsPanel pinPanel={pinPanel} />
                    <ClassesPanel pinPanel={pinPanel} />
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
