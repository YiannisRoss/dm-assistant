import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/EquipmentPanel.scss"
class EquipmentPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            isItemSelected: false,
            selectedItem: null,
            selectedItemData: {},
            panelInfo: {
                results: []
            }
        }
    }

    async getData() {
        console.log(`fetching equipment data from https://www.dnd5eapi.co/api/equipment`)
        let APIData = fetch(`https://www.dnd5eapi.co/api/equipment`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    panelInfo: data
                })
            })
    }

    async getItemData(item) {
        let APIData = fetch(`https://www.dnd5eapi.co${item.url}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    selectedItemData: data
                })
            })
    }

    toggleInfoPanel(item) {
        if (this.state.selectedItem == null) {
            this.getItemData(item)
            this.setState({
                selectedItem: item,
                isItemSelected: true
            })
        }
        else {
            this.setState({
                selectedItem: null,
                isItemSelected: false
            })
        }
    }

    searchDropdown() {
        let input = document.getElementById("search-input");

        if (input) {
            let filter = input.value.toUpperCase();
            let div = document.getElementById("expanded-panel");
            let li = div.getElementsByTagName("li");
            for (let i = 0; i < li.length; i++) {
                let txtValue = li[i].textContent || li[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
    }

    componentDidMount() {

        this.getData()

    }

    render() {
        const { selectedItemData } = this.state;
        let listItems = this.state.panelInfo.results.map((item) =>
            <li className="item-list-element" onClick={() => {
                this.toggleInfoPanel(item)

            }}>{item.name}</li>);
        let expandedList = <div id="expanded-panel">
            <input type="text" id='search-input' placeholder="Search..." onChange={() => { this.searchDropdown() }}></input>
            {listItems}

        </div >

        let itemProperties = <ul>
            <li>{selectedItemData.name}</li>
            <li>Weight: {selectedItemData.weight} lbs</li>
            <li>{selectedItemData.cost && (selectedItemData.cost.quantity + selectedItemData.cost.unit)}</li>
            {selectedItemData.description && <li className='item-description'>{selectedItemData.desc}</li>}

            {/* armor */}
            {selectedItemData.equipment_category && selectedItemData.equipment_category.name == 'Armor' && ('AC ' + selectedItemData.armor_class.base)}
            {/* weapon */}
            {selectedItemData.equipment_category && selectedItemData.equipment_category.name == 'Weapon' &&

                selectedItemData.properties.map((property => {

                    return ` ${property.name}`
                })) + (` ${selectedItemData.weapon_category}
            Damage: ${selectedItemData.damage.damage_dice} ${selectedItemData.damage.damage_type.name}
                `)}
            {/* ranged */}
            {selectedItemData.weapon_range != 'Melee' &&
                selectedItemData.range && (`${selectedItemData.range.normal}/${selectedItemData.range.long}`)
            }

            {selectedItemData.two_handed_damage && (`Versatile: ${selectedItemData.two_handed_damage.damage_dice}`)}



        </ul>

        let itemPanel = <div className="item-panel">
            {selectedItemData != null && (
                itemProperties)
            }
            <button onClick={() => {
                this.toggleInfoPanel()
            }}>X</button>
        </div>

        return (
            <React.Fragment>
                <div className="info-panel" onMouseEnter={() => {
                    this.setState({
                        isExpanded: true
                    });

                }
                } onMouseLeave={() => {
                    this.setState({
                        isExpanded: false
                    });
                }}>
                    <button onClick={() => {

                        console.log(this.state.selectedItemData)

                    }} />
                    Equipment
                    {this.state.isItemSelected && itemPanel}
                    {this.state.isExpanded && expandedList}

                </div>

            </React.Fragment>
        );
    }
}


export default EquipmentPanel
