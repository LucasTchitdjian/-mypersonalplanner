import { Controller } from "stimulus";
import { csrfToken } from "@rails/ujs";

export default class extends Controller {
  static targets = ['bullet', 'input', 'bulletevent', 'liBullet'];


  update(event) {
    event.preventDefault();
    const url = `${this.bulletTarget.action}`;
    console.log(this.bulletTarget);
    // fonction destroy bullet avec ctrl + backspace
    if (event.ctrlKey && event.key === "Backspace") {
      console.log('hello');
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

  create_event(event) {
    event.preventDefault();
    console.log(this.bulleteventTarget);
    console.dir(this.bulleteventTarget);
    // print
    const toto = new FormData(this.bulleteventTarget)
    console.log(toto);
    // print

    fetch(this.bulleteventTarget.action, {
      method: 'POST',
      headers: { 'Accept': "application/json", 'X-CSRF-Token': csrfToken() },
      body: new FormData(this.bulleteventTarget)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        console.log(data["title"])
      });
  }





}
