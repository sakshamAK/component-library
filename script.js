const menu = document.querySelector("#menu");
const list = document.querySelector(".links");
const close = document.querySelector("#close-btn");
menu.addEventListener("click", () => {
    list.classList.add("show")
    list.classList.remove("hide")
})

close.addEventListener("click", () => {
    list.classList.remove("show")
    list.classList.add("hide") 
})