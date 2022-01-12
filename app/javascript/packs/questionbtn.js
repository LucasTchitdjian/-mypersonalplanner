const questionBtn = () => {
  const p = document.getElementById("questionbtn");

  p.addEventListener('click', () => {
    if(document.querySelector(".shortcuts-container")) {
      document.querySelector(".shortcuts-container").remove();
      console.log(document.querySelector(".shortcuts-container"));
    } else {
        const shortcuts = document.createElement('div');
        shortcuts.textContent = "Shortcuts-list:\r\nCtrl + Enter => Plan a bullet\r\n Ctrl + backspace => Delete a Bullet\r\n TAB: => Browser between bullets ";
        shortcuts.classList.add("shortcuts-container");
        document.body.appendChild(shortcuts);
        console.log(shortcuts);
    }

  });
}

export { questionBtn }