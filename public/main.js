let navigatie = document.querySelector(".navigatie");
let menu = document.querySelector(".home-menu")

navigatie.addEventListener('click', () => {
    navigatie.classList.toggle("active");
    menu.classList.toggle("home-menu-active")
});