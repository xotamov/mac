let buttons = document.querySelectorAll(".button")
let bagroude = document.querySelector('.bagroude')
let color = document.querySelector(".color")

let allphotos = {
    gold:{
        title: "gold",
        img: "./img/gold.jpg"
    },
    grey:{
        title: "grey",
        img: "./img/grey.jpg",
    },
    black:{
        title: "black",
        img: "./img/black.jpg",
    },
    white:{
        title: "white",
        img: "./img/white.jpg",
    }
}
let defaultSelected = allphotos.black
color.innerHTML = `color - ${defaultSelected.title}` 

buttons.forEach(btn => {
    let text = btn.getAttribute('data-text')
    let iPhone = allphotos[text]

    btn.onmouseenter = () => {
        color.innerHTML = `color - ${iPhone.title}`
    }
    btn.onmouseleave = () => {
    color.innerHTML = `color - ${defaultSelected.title}`    
    }
    btn.onclick = () => {
        bagroude.style.backgroundImage = `url(${iPhone.img})`
        defaultSelected = iPhone
    }
})