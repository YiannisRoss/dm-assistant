import React from "react"
import PropTypes from "prop-types"
// import "../../assets/stylesheets/DropdownExpandable.scss"
class DropdownExpandable extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { dropdownOptions } = this.props;

        const dropdownOptionsList = dropdownOptions.map((option) =>

            <option key={option.id} onClick={() => {

            }
            }> {option.name || option.title} </option>
        )



        return (
            <React.Fragment>
                <div className="dropdown-expandable" onMouseOver={() => {
                    console.log('dropdown expandable mouseover')
                }
                }>
                    dropdown expandable

                </div>

            </React.Fragment>
        );
    }
}

DropdownExpandable.propTypes = {
    characters: PropTypes.array,
    maps: PropTypes.array
};
export default DropdownExpandable
