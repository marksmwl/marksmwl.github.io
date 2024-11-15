function hey(idToScroll) {
    const element = document.getElementById(`${idToScroll}`);
    element.scrollIntoView({
        behavior: "smooth"
    })
}

function openMenu() {
    document.querySelector(".menu-popup").classList.toggle("show")
}