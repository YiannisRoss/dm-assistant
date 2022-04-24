import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/InfoPanel.scss"
class InfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isExpanded: false ,
            panelInfo: ''}
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

    componentDidMount() {

        this.getData()

    }

    render() {
        const { infoName, apiTarget } = this.props;
        let expandedPanel = <div className="expanded-panel">

             PANEL INFO
            {/* {this.state.panelInfo} */}

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
