// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("controllers", true, /_controller\.js$/)
application.load(definitionsFromContext(context))

// --- from https://github.com/adrienpoly/stimulus-flatpickr
// import Flatpickr
import Flatpickr from 'stimulus-flatpickr'

// Import style for flatpickr
if (localStorage.getItem('darkMode') !== "enabled") {
  console.log("Salut");
  require("flatpickr/dist/flatpickr.css");
} else {
  console.log("Ciao");
  require("flatpickr/dist/themes/dark.css");
}



// Manually register Flatpickr as a stimulus controller
application.register('flatpickr', Flatpickr)

// --- from https://github.com/adrienpoly/stimulus-flatpickr

