import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/InfoPanel.scss"
class InfoPanel extends React.Component {
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
        console.log(`fetching ${this.props.infoName} data from https://www.dnd5eapi.co/api/${this.props.apiTarget}`)
        let APIData = fetch(`https://www.dnd5eapi.co/api/${this.props.apiTarget}`, {
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
    componentDidMount() {

        this.getData()

    }

    render() {
        const { infoName, apiTarget } = this.props;
        const { selectedItemData } = this.state;
        let listItems = this.state.panelInfo.results.map((item) =>
            <li onClick={() => {
                this.toggleInfoPanel(item)

            }}>{item.name}</li>);
        let expandedList = <div className="expanded-panel">

            {listItems}

        </div>

        let itemProperties = <ul>
            <li>{selectedItemData.name}</li>
            <li>Weight: {selectedItemData.weight}</li>
            <li>{selectedItemData.cost && (selectedItemData.cost.quantity + selectedItemData.cost.unit)}</li>
            <li className='item-description'>{selectedItemData.desc}</li>
        </ul>

        let itemPanel = <div className="expanded-panel item-panel">

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
                    console.log('INFOPANEL mouse enter.')
                    this.setState({
                        isExpanded: true
                    });

                }
                } onMouseLeave={() => {
                    console.log('infopanel mouse left')
                    this.setState({
                        isExpanded: false
                    });
                }}>
                    <button onClick={() => {
                        console.log(this.state.panelInfo)
                        console.log('results:  ')
                        console.log(this.state.panelInfo.results)
                        console.log('results length: ')
                        console.log(this.state.panelInfo.results.length)
                        console.log('result number 0:')
                        console.log(this.state.panelInfo.results[0])
                        console.log('list items :')
                        console.log(listItems)
                        console.log('selected item data:')
                        console.log(this.state.selectedItemData)
                        console.log('cost:' + selectedItemData.cost.quantity)
                    }} />
                    {infoName}
                    {this.state.isItemSelected && itemPanel}
                    {this.state.isExpanded && expandedList}

                </div>

            </React.Fragment>
        );
    }
}

InfoPanel.propTypes = {
    infoName: PropTypes.string,
    apiTarget: PropTypes.string
};
export default InfoPanel
