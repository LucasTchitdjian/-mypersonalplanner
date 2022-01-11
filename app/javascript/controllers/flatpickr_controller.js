// ---- GUIDE FROM https://github.com/adrienpoly/stimulus-flatpickr

// import stimulus-flatpickr wrapper controller to extend it
import Flatpickr from 'stimulus-flatpickr'

// import a theme (could be in your main CSS entry too...)
// import 'flatpickr/dist/themes/dark.css'

// create a new Stimulus controller by extending stimulus-flatpickr wrapper controller
export default class extends Flatpickr {
  connect(){
    console.log("Salut");
  }

  // all flatpickr hooks are available as callbacks in your Stimulus controller
  change(selectedDates, dateStr, instance) {
    console.log('the callback returns the selected dates', selectedDates)
    console.log('but returns it also as a string', dateStr)
    console.log('and the flatpickr instance', instance)
  }
}
