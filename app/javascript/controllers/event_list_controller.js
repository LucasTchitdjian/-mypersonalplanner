import { Controller } from "stimulus";
// import { csrfToken } from "@rails/ujs";

export default class extends Controller {
  static targets = ['inputDate', 'eventList'];

  showEventsByDay() {
    let inputSearch = document.querySelector(".inputPgSearch");
    console.log("input search")
    let date = this.inputDateTarget.value;
    const url = inputSearch.action;
    fetch(`${url}events/?query=date_start:${date}`,
    { headers: { 'Accept': 'text/plain' }})
      .then(response => response.text())
      .then((data) => {
        this.eventListTarget.outerHTML = data;
      })
  }
}
