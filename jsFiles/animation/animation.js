// loading animation
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
    }, 1100);
});

// when user refresh, move to very top
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});