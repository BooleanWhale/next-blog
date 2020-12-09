let darkMode = localStorage.getItem('darkMode');
const darkModeSwitch = document.querySelector('#dark-mode-switch');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

window.onload = function loadDarkMode() {
    if (darkMode !== "enabled") {
        darkModeSwitch.checked = true;
    }
}

const enableDarkMode = () => {
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    localStorage.setItem('darkMode', null);
}

darkModeToggle.addEventListener("click", () => {
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    console.log("test");
});