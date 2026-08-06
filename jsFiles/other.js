// Getting the scroll Y value
window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--scroll-y", window.scrollY + "px");
});

window.addEventListener("scroll", () => {
    if (window.innerWidth > 1000 && window.scrollY > window.innerHeight - 100) {
        document.body.classList.add("header-fixed");
    }
    else if(window.innerWidth <= 1200 && window.scrollY > window.innerHeight - 150) {
            document.body.classList.add("header-fixed-mobile");
    } else {
        document.body.classList.remove("header-fixed");
        document.body.classList.remove("header-fixed-mobile");
    }
});
