# dm-assistant

A Ruby on Rails app that assists DMs with character and map tracking. Made with Dungeons and Dragons in mind, but potentially works for other systems as well. Hosted [here on Heroku](https://fierce-wave-86598.herokuapp.com/)

Username/email login

Character and map creation, with images

Character backup exporting and importing

React component GameTracker.js allows for live character creation and editing with the rails API
  - map magnification on doubleclick with https://www.npmjs.com/package/react-image-magnifiers

Dungeons and Dragons SRD data is retrieved through the dnd5eapi


# Contents  

- [Installation](#install)  
- [Errors](#errors)
- [License](#license)

<a name="install"/>

## Installation

#### **_No installation is needed to run this for your game._** 
Click on [this link](https://fierce-wave-86598.herokuapp.com/) to access dm-assistant. The hosting website will save your account details, as well as all characters and maps you create. The database is persistent, meaning it is stored for you to access even after you close the browser or restart your computer.

### Authentication

Authentication is handled with the [devise](https://github.com/heartcombo/devise) gem. 

### Game Tracker

The Game Tracker tool is built in React with the [react-rails](https://github.com/reactjs/react-rails) gem. It calls 2 APIs: the Rails API through the [app/controllers/api/v1/characters_controller](https://github.com/YiannisRoss/dm-assistant/blob/main/app/controllers/api/v1/characters_controller.rb) to make GET, POST and PATCH requests for showing, creating and updating characters, respectively. The 2nd API called and consumed is the [dnd5eapi](https://www.dnd5eapi.co/), which provides the data for equipment, spells, conditions and class features.
  The requests sent and the data received are JSON, so a slow or unstable connection might delay or cause issues with the dropdowns.

### Cloning

If you want to clone the project to run it locally, make sure you have the appropriate Ruby and Ruby on Rails versions installed first. The version numbers can be found in the `Gemfile` of the main directory. The database used is postgresql for the heroku deployment branch.


<a name="errors"/>

## Errors

Any errors listed here are most likely for the locally-run version of the app. If you are not a developer, you will probably never encounter these.

### Cannot find module 'module-name'

Most likely an npm issue not having updated. Run:
```
npm update
npm install
```

<a name="license"/>

## License

As stated in the [dnd5eapi](https://www.dnd5eapi.co/docs/#overview--faq): the SRD, or Systems Reference Document, contains guidelines for publishing content under the OGL. This allows for some of the data for D&D 5e to be open source. The API only covers data that can be found in the SRD. [Here's a link to the full text of the SRD, as of 5/5/2022.](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf)
