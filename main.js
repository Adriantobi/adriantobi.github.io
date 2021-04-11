const menuBtn = document.querySelector(".menu-btn")

const navLinks = document.querySelector(".nav__links")

const navLink = document.querySelectorAll("nav__links")

// main toggle

menuBtn.addEventListener("click", () => {
    toggle();
});

//toggle on item click if open
navLink.forEach(item => {
    item.addEventListener("click", () => {
        if ( menuBtn.classList.contains("open")) {
            toggle;
        }
    })
})

function toggle() {
    menuBtn.classList.toggle("open");
    navLinks.classList.toggle("open");
}