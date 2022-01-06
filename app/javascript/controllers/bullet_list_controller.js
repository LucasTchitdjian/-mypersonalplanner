import { Controller } from "stimulus";
import { csrfToken } from "@rails/ujs";

export default class extends Controller {
  static targets = ['bullet', 'input', "liBullet"];

  update(event) {
    event.preventDefault();
    const url = `${this.bulletTarget.action}`;
    console.log(this.bulletTarget);
    // Comment marche DATAFORM ??
    // let toto = new FormData(this.bulletTarget)
    // console.dir(toto)
    // console.log(toto.values());
    fetch(url, {
      method: 'PATCH',
      headers: { 'Accept': 'text/plain' },
      body: new FormData(this.bulletTarget)})
      .then(response => response.text())
      .then((data) => {
      })
  }

  destroy(event){
    if (event.ctrlKey && event.key === "Backspace"){
      // console.log('hello');
      const url = this.bulletTarget.action
      fetch(url, {
        method: 'DELETE',
        'Accept': "application/json",
        // 'Content-Type': "application/json",
        // 'X-CSRF-Token': csrfToken()
      })
      .then(response => {
        // response.json()
      })
      .then((data)=> {
      })
      this.liBulletTarget.remove();
    }
  }
}
