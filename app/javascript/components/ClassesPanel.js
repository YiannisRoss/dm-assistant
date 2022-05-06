import React from "react"
import PropTypes from "prop-types"
// import "../../assets/stylesheets/SpellsPanel.scss"
class ClassesPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            isItemSelected: false,
            selectedItem: null,
            selectedItemData: {},
            selectedClassFeatures: {},
            panelInfo: {
                results: []
            }
        }
    }

    async getData() {
        console.log(`fetching classes data from https://www.dnd5eapi.co/api/classes`)
        let APIData = fetch(`https://www.dnd5eapi.co/api/classes`, {
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
            }).then(date => { this.getClassFeatures() })
    }

    async getClassFeatures() {
        let APIData = fetch(`https://www.dnd5eapi.co/api/classes/${this.state.selectedItemData.index}/features`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    selectedClassFeatures: data
                })
            })

    }
    showItemInfo(item) {

        this.getItemData(item)

        this.setState({
            selectedItem: item,
            isItemSelected: true
        })

    }


    componentDidMount() {

        this.getData()

    }

    render() {
        const { selectedItemData } = this.state;
        let listItems = this.state.panelInfo.results.map((item, index) =>
            <li key={index} className="item-list-element" onClick={() => {
                this.showItemInfo(item)

            }}>{item.name}</li>);
        let expandedList = <div id="expanded-panel">

            {listItems}

        </div >

        let itemProperties = <ul>
            <li>{selectedItemData.name} </li>
            <li>HD: {selectedItemData.hit_die} </li>

        </ul>

        let itemPanel = <div className="item-panel">
            {selectedItemData != null && (
                itemProperties)
            }
            <button onClick={() => {
                this.setState({
                    isItemSelected: false
                })
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
                        console.log(this.state.selectedClassFeatures)

                    }} />
                    Classes
                    {this.state.isItemSelected && itemPanel}
                    {this.state.isExpanded && expandedList}

                </div>

            </React.Fragment>
        );
    }
}


export default ClassesPanel
