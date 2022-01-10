// import { csrfToken } from '@rails/ujs';

// const bullet

//   function onDragStart(event) {
//     event
//       .dataTransfer
//       .setData('text/plain', event.target.id);

//     event
//       .currentTarget
//       .style
//       .backgroundColor = 'yellow';
//     console.dir(event);
//   }

//   function onDragOver(event) {
//     event.preventDefault();
//     console.log("TOTO se positionne sur la dropzone")
//   }

//   function onDrop(event) {
//     const id = event
//       .dataTransfer
//       .getData('text');

//     const draggableElement = document.getElementById(id);
//     const dropzone = event.target;
//     console.log("TOTO a droppé sur la dropzone")
//     console.log(id)
//     console.dir(draggableElement)
//     const urlEvent = draggableElement.baseURI.replace(/#bullet-\d+/, "events");
//     console.log(urlEvent)
//     const title = draggableElement.childNodes[1].value
//     console.log(title);
//     const date = "2022-01-06"
//     const bulletId = draggableElement.id.replace(/bullet-/, "");
//     console.log(bulletId)
//     fetch(urlEvent, {
//       method: 'POST',
//       headers: { 'Accept': "application/json", 'Content-Type': "application/json", 'X-CSRF-Token': csrfToken() },
//       body: JSON.stringify({ "title": title, "day_start": date, "bullet_id": bulletId })
//     })
//       .then(response => response.json())
//       .then((data) => {
//         const eventList = document.querySelector("#events-list");
//         console.log(dateStart);
//         console.log(dateCalendar);
//         if (dateStart === dateCalendar) {
//           eventList.insertAdjacentHTML("beforeend",
//             `<div id="event-${data.id}" class="event">
//                 <div class="title">
//                   <p id="title-content">${data.title}</p>
//                 </div>
//                 <div class="time">
//                   <div class="time-from">
//                   <p>${data.hour_start ? data.hour_start.strftime("%H:%M") : "--:--"} </p>
//                   </div>
//                 </div>
//               </div>`)
//         }
//       })

//     event
//       .dataTransfer
//       .clearData();
//   }
