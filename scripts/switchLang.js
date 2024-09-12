langSwitcher.onchange = () => {
    const beforeLang = document.getElementsByClassName(currentLang);
    const afterLang = document.getElementsByClassName(langSwitcher.value);

    currentLang = langSwitcher.value;
    localStorage.setItem("lang", currentLang);

    for (let i = 0; i < beforeLang.length; i++) {
        beforeLang[i].classList.toggle("hidden");
    }

    for (let i = 0; i < afterLang.length; i++) {
        afterLang[i].classList.toggle("hidden");
    }
};
