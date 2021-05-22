let slider = document.getElementById("slider");
let slideSection = document.querySelectorAll(".slider__section");
let ultimoSlide = document.querySelectorAll(".slider__section")[slideSection.length - 1];
let slider__button = document.querySelector(".slider__button");

slider.insertAdjacentElement("afterbegin", ultimoSlide);

let anterior = document.querySelector(".slider__button-left")
let siguiente = document.querySelector(".slider__button-right")

siguiente.addEventListener("click", next)
anterior.addEventListener("click", previous)

function next() {
    slideSection.forEach(element => {
        element.style.left = "-200%"
        element.style.transition = "all .5s"
    });
    setTimeout(() => {
        slideSection.forEach(element => {
            element.style.left = "-100%"
            element.style.transition = "none"
        });
        slider__button.insertAdjacentElement("beforebegin", document.querySelectorAll(".slider__section")[0])
    }, 500);
}

function previous() {
    slideSection.forEach(element => {
        element.style.left = "0%"
        element.style.transition = "all .5s"
    });
    setTimeout(() => {
        slideSection.forEach(element => {
            element.style.left = "-100%"
            element.style.transition = "none"
        });
        slider.insertAdjacentElement("afterbegin", document.querySelectorAll(".slider__section")[slideSection.length - 1])
    }, 500);
}

setInterval(() => {
    next()
}, 5000);