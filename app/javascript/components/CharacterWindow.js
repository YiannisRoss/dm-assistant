import React from "react"
import PropTypes from "prop-types"
class CharacterWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActivated: false
        };

    }

    render() {

        return (
            <React.Fragment>
                <div>
                    {console.log(`characterwindow state:`)}
                    {console.log(this.state)}
                    <h2>CharacterWindow</h2>
                    <h3>{this.state.isActivated && character.name}</h3>
                </div>


            </React.Fragment>
        );
    }
}

CharacterWindow.propTypes = {
    character: PropTypes.object,

};
export default CharacterWindow
