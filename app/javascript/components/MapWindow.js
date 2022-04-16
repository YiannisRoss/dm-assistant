import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/MapWindow.scss"

class MapWindow extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { map, mapImageURL } = this.props;


        return (
            <React.Fragment>
                <div>

                    <h2>{map.title}</h2>


                    <button onClick={() => { console.log(map) }}>show map details</button>
                    <img src={mapImageURL}></img>
                </div>


            </React.Fragment>
        );
    }
}

MapWindow.propTypes = {
    map: PropTypes.object,

};
export default MapWindow
