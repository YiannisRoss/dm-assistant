import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/SpellsPanel.scss"
class SpellsPanel extends React.Component {
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
        console.log(`fetching Spells data from https://www.dnd5eapi.co/api/spells`)
        let APIData = fetch(`https://www.dnd5eapi.co/api/spells`, {
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
        let listItems = this.state.panelInfo.results.map((item, index) =>
            <li key={index} className="item-list-element" onClick={() => {
                this.toggleInfoPanel(item)

            }}>{item.name}</li>);
        let expandedList = <div id="expanded-panel">
            <input type="text" id='search-input' placeholder="Search..." onChange={() => { this.searchDropdown() }}></input>
            {listItems}

        </div >

        let itemProperties = <ul>
            <li>{selectedItemData.name} ({selectedItemData.school && selectedItemData.school.name})</li>
            <li>{selectedItemData.range} {selectedItemData.components} ({(selectedItemData.components && selectedItemData.components.indexOf("V") > -1) && selectedItemData.material})</li>
            <li>{selectedItemData.casting_time}{selectedItemData.ritual && ', ritual'}</li>
            <li>{selectedItemData.duration}{selectedItemData.concentration && ', concentration'}</li>
            <li className='item-description'>{selectedItemData.desc}</li>
            <li>{selectedItemData.higher_level}</li>



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
                    Spells
                    {this.state.isItemSelected && itemPanel}
                    {this.state.isExpanded && expandedList}

                </div>

            </React.Fragment>
        );
    }
}


export default SpellsPanel