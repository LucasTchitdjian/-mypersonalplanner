import { Controller } from "stimulus";
// import { csrfToken } from "@rails/ujs";

export default class extends Controller {
  static targets = ['inputDate', 'eventList'];

  showEventsByDay() {
    // let inputSearch = document.querySelector(".inputPgSearch");
    // const url = inputSearch.action;
    let date = this.inputDateTarget.value;
    fetch(`/events/?query=date_start:${date}`,
    { headers: { 'Accept': 'text/plain' }})
      .then(response => response.text())
      .then((data) => {
        this.eventListTarget.outerHTML = data;
      })
  }
}
