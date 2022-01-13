import { Controller } from "stimulus";
import { csrfToken } from "@rails/ujs";

export default class extends Controller {
  static targets = ['bullet', 'input', 'liBullet', 'inputDate', "dateNow", "new"];

  connect() {
    let datesSelect = document.querySelectorAll('[aria-label="January 3, 2022"]');
  }

  create(event){
    event.preventDefault();
    const url = "";
    // Ajout de Resonsable @person a la bullet
    let formData = new FormData(this.newTarget)
    for (var value of formData) {
      if (value[0] === "content") {
        // if value contains @ recupere le name de la personne et stocke dans une variable
        if (value[1].match(/@(\w+)/)) {
          let personName = value[1].match(/@(\w+)/)[1];
          // ajoute @person dans FormData
          formData.append('person', personName);
        }
      }
    }
    fetch(url, {
      method: 'POST',
      headers: { 'Accept': "application/json", 'Content-Type': "application/json", 'X-CSRF-Token': csrfToken() },
      body: formData
    })
      .then(response => response.json())
      .then((data) => {
      });
  }


  update(event) {
    event.preventDefault();
    const url = `${this.bulletTarget.action}`;
    let bulletId = this.bulletTarget.id.replace("bullet-", "")
    let inputValue = this.inputTarget.querySelector('input').value
    // create event with :;
    if (event.key === ":" && event.ctrlKey) {
      //insert form for Date
      this.inputTarget.insertAdjacentHTML("afterend", `
        <input data-bullet-list-target="inputDate" value="${this.dateNowTarget.textContent}" label="false" type="date" name="day_start" id="day_start">
      `)
    }

    if (event.ctrlKey && event.key === "Enter") {
      // Date a vérif pb replace
      let dateStart = document.querySelector("#bullet_start_time").value;
      // if content === !2022-02-31
      const regexDate = /!(\d+-\d+-\d+)/
      if (inputValue.match(regexDate)) {
        dateStart = inputValue.match(regexDate)[1]
        inputValue = inputValue.replace(regexDate, "");
      }
      // if content === :1420
      let heureStart
      const regexHeure = /:(\d{4})/
      if (inputValue.match(regexHeure)) {
        heureStart = inputValue.match(regexHeure)[1]
        inputValue = inputValue.replace(regexHeure, "");
        heureStart = heureStart.substring(0, 2) + ":" + heureStart.substring(2, heureStart.length)
      }
      if(dateStart === "") {
        dateStart = this.dateNowTarget.textContent
      }
      // Status Delegated
      const urlEvent = this.bulletTarget.action.replace(/bullets\/\d+/, "events")
      if (inputValue.match(/@(\w+)/)) {
        fetch(url, {
          method: 'PATCH',
          headers: { 'Accept': "application/json", 'Content-Type': "application/json", 'X-CSRF-Token': csrfToken()  },
          body: JSON.stringify({"status": "Delegated"})
        })
          .then(response => response.json())
          .then((data) => {
          })
      } else {
        fetch(urlEvent, {
          method: 'POST',
          headers: { 'Accept': "application/json", 'Content-Type': "application/json", 'X-CSRF-Token': csrfToken() },
          // "title"=> "je veux mangera", "day_start"=> "2022-01-06"
          body: JSON.stringify({ "title": inputValue, "hour_start": heureStart, "day_start": dateStart, "bullet_id": bulletId })
          // body: new FormData(this.bulleteventTarget)
        })
          .then(response => response.json())
          .then((data) => {
            let dateStart = document.querySelector("#bullet_start_time").value
            const eventList = document.querySelector("#events-list");
            // this.liBulletTarget.classList.add("btn-primary")
            dateStart !== "" ? dateStart : dateStart = this.dateNowTarget.textContent
            if (data.day_start === dateStart) {
              eventList.insertAdjacentHTML("beforeend",
                `<div id="event-${data.id}" class="event">
                <div class="title">
                  <p id="title-content">${data.title}</p>
                </div>
                <div class="time">
                  <div class="time-from">
                  <p>${data.hour_start ? data.hour_start.match(/(\d{2}:\d{2})/)[1] : "--:--"} </p>
                  </div>
                </div>
              </div>`)
            }
          });
        }

      this.liBulletTarget.classList.add("planned");
      setTimeout(() => { this.liBulletTarget.remove(); }, 1000);

    }
    // fonction destroy bullet avec ctrl + backspace
    if (event.ctrlKey && event.key === "Backspace") {
      const url = this.bulletTarget.action
      fetch(url, {
        method: 'DELETE',
        'Accept': "application/json"
        // 'Content-Type': "application/json",
        // 'X-CSRF-Token': csrfToken()
      })
        .then(response => {
          // response.json()
        })
        .then((data) => {
        })
      this.liBulletTarget.remove();
    }

    // Ajout de Resonsable @person a la bullet
    let formData = new FormData(this.bulletTarget)
    for (var value of formData) {
      if (value[0] === "content") {
        // if value contains @ recupere le name de la personne et stocke dans une variable
        if (value[1].match(/@(\w+)/)) {
          let personName = value[1].match(/@(\w+)/)[1];
          // ajoute @person dans FormData
          formData.append('person', personName);
        }
      }
    }
    fetch(url, {
      method: 'PATCH',
      headers: { 'Accept': 'text/plain' },
      body: formData
    })
      .then(response => response.text())
      .then((data) => {
      })
  }
}
