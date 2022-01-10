function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('theme').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('theme').checked = true;
    }
})();
