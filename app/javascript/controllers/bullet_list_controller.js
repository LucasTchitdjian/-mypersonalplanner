import { Controller } from "stimulus";
import { csrfToken } from "@rails/ujs";

export default class extends Controller {
  static targets = ['bullet', 'input', 'liBullet', 'inputDate', "dateNow"];

  connect() {
    let datesSelect = document.querySelectorAll('[aria-label="January 3, 2022"]');
  }



  update(event) {
    event.preventDefault();
    const url = `${this.bulletTarget.action}`;
    let inputValue = this.inputTarget.querySelector('input')
    // console.log(inputValue.value)
    let bulletId = this.bulletTarget.id.replace("bullet-", "")
    //console.log(this.dateNowTarget.textContent);
    // create event with :;
    if (event.key === ":" && event.ctrlKey) {
      //insert form for Date
      this.inputTarget.insertAdjacentHTML("afterend", `
        <input data-bullet-list-target="inputDate" value="${this.dateNowTarget.textContent}" label="false" type="date" name="day_start" id="day_start">
      `)
    }

    if (event.ctrlKey && event.key === "Enter") {
      let dateStart = document.querySelector("#bullet_start_time").value;
      console.log();
      let dateCalendar = this.dateNowTarget.textContent
      // try {
      //   // dateStart = this.inputDateTarget.value;
      // } catch (error) {
      //   dateStart = dateCalendar;
      // }

      // BUG ICI
      const urlEvent = this.bulletTarget.action.replace(/bullets\/\d+/, "events")
      // le Form ne s affiche pas en entier
      fetch(urlEvent, {
        method: 'POST',
        headers: { 'Accept': "application/json", 'Content-Type': "application/json", 'X-CSRF-Token': csrfToken() },
        // "title"=> "je veux mangera", "day_start"=> "2022-01-06"
        body: JSON.stringify({ "title": inputValue.value, "day_start": dateStart, "bullet_id": bulletId })
        // body: new FormData(this.bulleteventTarget)
      })
        .then(response => response.json())
        .then((data) => {
          const eventList = document.querySelector("#events-list");
          console.log(dateStart);
          console.log(dateCalendar)
          this.liBulletTarget.remove();
          // this.liBulletTarget.classList.add("btn-primary")

          eventList.insertAdjacentHTML("beforeend",
            `<div id="event-${data.id}" class="event">
            <div class="title">
              <p id="title-content">${data.title}</p>
            </div>
            <div class="time">
              <div class="time-from">
              <p>${data.hour_start ? data.hour_start.strftime("%H:%M") : "--:--"} </p>
              </div>
            </div>
          </div>`)
        });

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
          console.log(personName);
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
        // console.log(data);
      })
  }
}
