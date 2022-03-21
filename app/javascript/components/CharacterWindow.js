import React from "react"
import PropTypes from "prop-types"
class CharacterWindow extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {

        return (
            <React.Fragment>
                <div>

                    <h2>CharacterWindow</h2>
                    <h3>{this.props.character.name}</h3>
                </div>


            </React.Fragment>
        );
    }
}

CharacterWindow.propTypes = {
    character: PropTypes.object,

};
export default CharacterWindow
