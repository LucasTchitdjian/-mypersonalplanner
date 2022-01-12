import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['input', 'new'];

  create(event) {
    event.preventDefault();
    console.log("TAMERE")
// console.log(`${this.newTarget.action}`);
    const url = `${this.newTarget.action}`;
    fetch(url, {
      method: 'POST',
      headers: { 'Accept': 'text/plain' },
      body: new FormData(this.newTarget)
    })
      .then(response => response.text())
      .then((data) => {
        console.dir(data);
        console.log(data);
      })
  }

}
