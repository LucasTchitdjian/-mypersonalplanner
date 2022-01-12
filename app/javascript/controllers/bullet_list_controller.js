import { Controller } from "stimulus";
import { csrfToken } from "@rails/ujs";

export default class extends Controller {
  static targets = ['bullet', 'input', 'liBullet', 'inputDate', "dateNow"];

  connect() {
    let datesSelect = document.querySelectorAll('[aria-label="January 3, 2022"]');
  }

  create(event){
    event.preventDefault();
    const url = "";
    fetch(url, {
      method: 'POST',
      headers: { 'Accept': "application/json", 'Content-Type': "application/json", 'X-CSRF-Token': csrfToken() },
      body: new FormData(this.newTarget)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      });
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
    fetch(url, {
      method: 'PATCH',
      headers: { 'Accept': 'text/plain' },
      body: new FormData(this.bulletTarget)})
      .then(response => response.text())
      .then((data) => {
      })

    }



  // create_event(event) {
  //   event.preventDefault();
  //   // console.log pour tester
  //   console.log(this.bulleteventTarget.parentElement.firstElementChild[2].value);
  //   console.dir(this.bulleteventTarget);
  //   // console.log pour tester
  //   const url = `${this.bulleteventTarget}events`;
  //   console.log(url); // test

  //   const content = this.bulleteventTarget.parentElement.firstElementChild[2].value;
  //   let data = { title: content,
  //      done: true}
  //   const request = new Request(url, {
  //     method: 'POST',
  //     body: data,
  //     headers: { 'Accept': "application/json", 'X-CSRF-Token': csrfToken() }
  //   })

  //   console.log(data);
  //   console.log(request);

  //   fetch(request)
  //     .then(response => console.log(response))
  //     .then((data) => { console.log(data)
      // headers: {
      //   "Content-Type": "application/json",
      //   "Accept": "application/json" },
      // body: data.to_json
  //   })
  // }

  // create_event(event) {
  //   event.preventDefault();
  //   // print
  //   for (var value of new FormData(this.bulleteventTarget).values()) {
  //     console.log(value);
  //   }

  //   fetch(this.bulleteventTarget.action, {
  //     method: 'POST',
  //     headers: { 'Accept': "application/json", 'Content-Type': "application/json", 'X-CSRF-Token': csrfToken() },
  //     // "title"=> "je veux mangera", "day_start"=> "2022-01-06"
  //     body: JSON.stringify({ "title": "je veux mangera des kebabs", "day_start": "2022-01-06", "bullet_id": "171" })
  //     // body: new FormData(this.bulleteventTarget)
  //   })
  //   .then(response => response.json())
  //   .then((data) => {
  //     console.log(data)
  //     console.log(data["title"])
  //   });
  // }


}
