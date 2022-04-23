import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/MapWindow.scss"
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";

class MapWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }

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
                        
                    <Magnifier
                    className="map-img"
                    imageSrc={mapImageURL}
                    imageAlt={`${map.title} image`}
                    // largeImageSrc="./large-image.jpg" // Optional
                    mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
                    touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
                    />
                    {/* <img src={mapImageURL}></img> */}
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
