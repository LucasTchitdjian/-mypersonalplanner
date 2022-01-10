const darkMode = () => {
  const chk = document.getElementById('chk');

  chk.onclick = function() {
    document.body.classList.toggle('dark-theme');
    // const element = document.getElementsByClassName('homebtn');
    // element.classList.toggle('dark-theme');
    };
}

export { darkMode }
