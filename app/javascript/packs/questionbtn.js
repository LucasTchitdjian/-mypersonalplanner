const questionBtn = () => {
  const p = document.getElementById("questionbtn");

  p.addEventListener('click', () => {
    if(document.querySelector(".question-btn-popup")) {
      document.querySelector(".question-btn-popup").remove();
      console.log(document.querySelector(".question-btn-popup"));
    } else {
        const code = `
        <div class="title-shortcuts">
        <p>SHORTCUTS</p>
        </div>
        <div class="shortcuts-container-test">
          <div class="left-element">
            <ul>
              <li>Create a bullet</li>
              <li>Delete a bullet</li>
              <li>Browse between bullets</li>
              <li>Plan a bullet on selected date</li>
              <li>Delegate bullet to @</li>
              <li>Inline date insertion</li>
              <li>Inline time insertion</li>
            </ul>
          </div>
          <div class="right-element">
            <p>Enter</p>
            <p>CTRL + Backspace</p>
            <p>TAB / SHIFT + TAB</p>
            <p>CTRL + Enter</p>
            <p>CTRL + Enter</p>
            <p>!YYYY-MM-DD</p>
            <p>:HHMM</p>
          </div>
        </div>`
        const shortcuts = document.createElement('div');
        shortcuts.classList.add("question-btn-popup");
        document.body.appendChild(shortcuts);
        shortcuts.insertAdjacentHTML(`beforeend`, code);
    }

  });
}

export { questionBtn }
