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
                <div className="map-window-div">
                    <div className="map-header">
                        <h2>{map.title}</h2>
                    </div>

                    <button onClick={() => { console.log(map) }}>show map details</button>
                    <img src={mapImageURL} className="map-img"></img>
                    <button className="hide-button" onClick={() => {
                        this.props.minimizeMapWindow(map)

                    }}>Hide</button>




                </div>


            </React.Fragment>
        );
    }
}

MapWindow.propTypes = {
    map: PropTypes.object,

};
export default MapWindow
