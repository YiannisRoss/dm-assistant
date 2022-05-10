import React from "react"
import PropTypes from "prop-types"


class PinnedPanels extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }

    }

    render() {




        return <div key={this.props.panels} id='pinned-panels-container'>
            <h2>Pinned Panels</h2>
            {this.props.panels.map((panel => {
                <li> {panel} </li>
            }))}


            <button onClick={() => {
                console.log(this.props)
            }}>check</button>
        </div>

            ;
    }
}

PinnedPanels.propTypes = {
    panels: PropTypes.array
};
export default PinnedPanels
