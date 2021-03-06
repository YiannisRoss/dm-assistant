import React from "react"
import PropTypes from "prop-types"
// import "../../assets/stylesheets/SpellsPanel.scss"
class ConditionsPanel extends React.Component {
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
        let APIData = fetch(`https://www.dnd5eapi.co/api/conditions`, {
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
        let expandedList = <div className="dropdown-popup expanded-panel">

            {listItems}

        </div >

        let itemProperties = <ul>
            <li>{selectedItemData.name} </li>

            <li className='item-description'>{selectedItemData.desc}</li>

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
                <div className="dropdown" onMouseEnter={() => {
                    this.setState({
                        isExpanded: true
                    });

                }
                } onMouseLeave={() => {
                    this.setState({
                        isExpanded: false
                    });
                }}>

                    Conditions
                    {this.state.isItemSelected && itemPanel}
                    {this.state.isExpanded && expandedList}

                </div>

            </React.Fragment>
        );
    }
}


export default ConditionsPanel
