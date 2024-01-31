var langSwitcher = document.getElementById("language");
var modeSwitcher = document.getElementById("mode-switcher");
var modeSwitcherBtns = modeSwitcher.getElementsByTagName("i");
var mobileBtn = document.getElementById("mobile-btn");
var mobileMenu = document.getElementById("mobile-menu");
var form = document.getElementById("contact-form").getElementsByTagName("form")[0];
var currentLang = localStorage.getItem("lang") || "en";
var currentMode = localStorage.getItem("mode") || "light";

function smoothScrollTo(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (currentLang !== "en") {
        const beforeLang = document.getElementsByClassName("en");
        const afterLang = document.getElementsByClassName(currentLang);

        for (let i = 0; i < beforeLang.length; i++) {
            beforeLang[i].classList.toggle("hidden");
        }

        for (let i = 0; i < afterLang.length; i++) {
            afterLang[i].classList.toggle("hidden");
        }

        langSwitcher.value = "vi"
    }

    if (currentMode !== "light") {
        modeSwitcherBtns[0].classList.add("hidden");
        modeSwitcherBtns[1].classList.remove("hidden");
        document.body.classList.add("dark");
    }

    mobileBtn.onclick = e => {
        e.stopPropagation();
        mobileMenu.classList.toggle("hidden");
    }

    document.body.onclick = e => {
        if (e.target !== mobileBtn) {
            mobileMenu.classList.add('hidden');
        }
    }
});

document.addEventListener("click", e => {
    if (e.target.classList.contains('smooth-scroll')) {
        e.preventDefault();

        const targetId = e.target.getAttribute('href').substring(1);
        smoothScrollTo(targetId);
    }
});