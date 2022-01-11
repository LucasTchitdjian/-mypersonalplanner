
const darkMode = () => {
  const chk = document.querySelector('#chk');
  let darkMode = localStorage.getItem('darkMode');
  
  const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkMode', 'enabled');
    console.log("enabling...")
    console.log(localStorage)
  };
  
  const disableDarkMode = () => {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("darkMode", null);
    console.log("disabling...")
    console.log(localStorage)
  }
  
  if (darkMode === "enabled") {
    enableDarkMode();
    chk.checked = true;
  }

  chk.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
      location.reload();
    } else {
      location.reload();
      disableDarkMode();
    }
  }); 
}

export { darkMode }
