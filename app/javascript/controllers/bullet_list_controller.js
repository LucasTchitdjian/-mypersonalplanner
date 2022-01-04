import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['bullet', 'input'];

  update(event) {
    event.preventDefault();
    const url = `${this.bulletTarget.action}`;
    fetch(url, {
      method: 'PATCH',
      headers: { 'Accept': 'text/plain' },
      body: new FormData(this.bulletTarget)})
      .then(response => response.text())
      .then((data) => {
      })
  }

}
