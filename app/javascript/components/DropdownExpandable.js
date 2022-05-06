import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/DropdownExpandable.scss"
class DropdownExpandable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: false }
    }
    render() {
        const { dropdownOptions, arrayName, createWindow, createDefaultOption } = this.props;


        const dropdownOptionsList = dropdownOptions.map((option) =>

            <option key={option.id} onClick={() => {
                createWindow(option)
            }}> {option.name || option.title} </option >
        )

        let dropdownPopup = <div className="dropdown-popup">
            <option onClick={() => {
                createDefaultOption()
            }}> Add {arrayName} </option >
            {dropdownOptionsList}
        </div>

        return (
            <React.Fragment>
                <div className="dropdown-expandable" onMouseEnter={() => {
                    console.log('dropdown expandable mouseenter.')
                    this.setState({
                        isExpanded: true
                    });
                }
                } onMouseLeave={() => {
                    console.log('mouse left')
                    this.setState({
                        isExpanded: false
                    });
                }}>
                    {arrayName}
                    {this.state.isExpanded && dropdownPopup}
                </div>

            </React.Fragment>
        );
    }
}

DropdownExpandable.propTypes = {
    dropdownOptions: PropTypes.array,
    arrayName: PropTypes.string
};
export default DropdownExpandable
