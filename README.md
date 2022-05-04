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

