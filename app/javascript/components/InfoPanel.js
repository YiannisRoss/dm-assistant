import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/InfoPanel.scss"
class InfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: false }
    }
    render() {
        const {  } = this.props;

        let panelInfo = ''
        let expandedPanel = <div className="expanded-panel">

             PANEL INFO
            {panelInfo}

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
                   
                    InfoPanel
                    {this.state.isExpanded && expandedPanel}

                </div>

            </React.Fragment>
        );
    }
}

InfoPanel.propTypes = {
    // dropdownOptions: PropTypes.array,
    // arrayName: PropTypes.string
};
export default InfoPanel
