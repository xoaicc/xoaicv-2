modeSwitcher.onclick = () => {
    modeSwitcherBtns[0].classList.toggle("hidden");
    modeSwitcherBtns[1].classList.toggle("hidden");
    document.body.classList.toggle("dark");
    currentMode = (currentMode === "light") ? "dark" : "light";
    localStorage.setItem("mode", currentMode);
};