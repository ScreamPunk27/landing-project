const navBtn = document.querySelector(".nav__btn");
const navLinks = document.querySelector(".nav__links");


navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
});