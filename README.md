# dm-assistant

A Ruby on Rails app that assists DMs with character and map tracking. Made with Dungeons and Dragons in mind, but potentially works for other systems as well.

Username/email login

Character and map creation, with images

Character backup exporting and importing

React component GameTracker.js allows for live character creation and editing with the rails API
  - map magnification on doubleclick with https://www.npmjs.com/package/react-image-magnifiers

Dungeons and Dragons SRD data is retrieved through the dnd5eapi



# Errors

## Cannot find module 'module-name'

Most likely an npm issue not having updated. Run:
```
npm update
npm install
```

# Licensing 

As stated in the [dnd5eapi](https://www.dnd5eapi.co/docs/#overview--faq), the SRD, or Systems Reference Document, contains guidelines for publishing content under the OGL. This allows for some of the data for D&D 5e to be open source. The API only covers data that can be found in the SRD. [Here's a link to the full text of the SRD, as of 5/5/2022.](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf)
