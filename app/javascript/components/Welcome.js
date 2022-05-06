import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/Welcome.scss'

class Welcome extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="welcome-page-contents">
          <div className='hero-image-container'>
            <div className='hero-text-container'>
              <h1>Welcome to <i>DM Assistant</i>,</h1>
              <p>a handy tool to organize your D&D setting. Create characters and maps, and track your campaign progress in the Game Tracker tool! </p>

            </div>


          </div>

          <h2>Characters tab</h2>
          <p>Build characters, upload their portraits, track their stats, add descriptions. When you create a new character, the classic D&D stats are auto-generated:
            STR DEX CON INT WIS CHA. If you submit an empty stats field, their stats will be randomly rolled.

            Export a backup of your characters, and you can re-import it from the Characters tab.(Note: the backup saves stats, name and description, but not the image.)
          </p>
          <h2>Maps tab</h2>
          <p>Upload map images and name them! </p>

          <h2>Game Tracker tab</h2>
          <p>Combine your characters and maps to supercharge your DMing skills! Use the Game Tracker tool to create and edit new characters on the fly, as
            well as have a handy tool for easy, immediate access to all Equipment, Spells, Conditions, Classes and their features, provided by the 5e SRD!
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Welcome
