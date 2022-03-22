import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/CharacterWindow/style.scss"

class MapWindow extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { map } = this.props;


        return (
            <React.Fragment>
                <div>

                    <h2>{map.title}</h2>


                    <button onClick={() => { console.log(map) }}>show map details</button>
                    <img src={map.image}></img>
                </div>


            </React.Fragment>
        );
    }
}

MapWindow.propTypes = {
    map: PropTypes.object,

};
export default MapWindow
