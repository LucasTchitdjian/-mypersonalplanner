// import { Controller } from "stimulus";
// import { csrfToken } from "@rails/ujs";
// import event_list_controller from "./event_list_controller";

// export default class extends Controller {
//   static targets = ["dateNow"];

//   dragstart(event) {
//     event.preventDefault();
//     const bulletId = event.target.form.id
//     event.dataTransfer.setData("application/drag-key", bulletId)
//     event.dataTransfer.effectAllowed = "move";

//     console.log(event.dataTransfer)
//     console.log("DRAG STARTED")
//   }

//   dragend(event) {
//     event.preventDefault();
//     console.log("DRAG ENDED")
//   }

//   dragenter(event) {
//     event.preventDefault();
//     console.log("DRAG ENTERED DROPZONE")
//   }

//   dragleave(event) {
//     event.preventDefault();
//     console.log("DRAG LEFT DROPZONE")
//   }

//   dragdrop(event) {
//     event.preventDefault();
//     console.log("DRAG DROPPED")
//   }

// }
