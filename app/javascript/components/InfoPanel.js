import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/InfoPanel.scss"
class InfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
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

    populateListItems() {
        let listItems
        if (this.state.panelInfo.results[0]) {
            const numberOfItemArrays = this.state.panelInfo.results.length
            for (let i = 0; i < numberOfItemArrays; i++) {
                listItems = listItems + this.state.panelInfo.results[0].map((item) => <li>{number}</li>);
            }
            console.log('this.state.panelInfo.results:')
            console.log(this.state.panelInfo.results)
            this.state.panelInfo.results[0].map((item) => <li>{number}</li>);
        }
        return listItems
    }

    componentDidMount() {

        this.getData()

    }


    render() {
        const { infoName, apiTarget } = this.props;
        let listItems = this.state.panelInfo.results.map((item) => <li>{item.name}</li>);



        let expandedPanel = <div className="expanded-panel">

            {listItems}

        </div>

        return (
            <React.Fragment>
                <div className="info-panel" onMouseEnter={() => {
                    console.log('INFOPANEL mouseenter.')
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
                        console.log('results:')
                        console.log(this.state.panelInfo.results)
                        console.log('results length: ')
                        console.log(this.state.panelInfo.results.length)
                        console.log('result number 0:')
                        console.log(this.state.panelInfo.results[0])
                        console.log('list items :')
                        console.log(listItems)

                    }} />
                    {infoName}
                    {this.state.isExpanded && expandedPanel}

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
