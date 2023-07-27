document.title = "Color Flipper"
const background = document.getElementById("background")
const button = document.querySelector("#color")
const main = document.querySelector("main")

let colorArr = ["Gold", "Brown", "Blue", "Red", "Purple", "Yellow", "Green", "Black", "Cyan", "Orange"]

button.addEventListener("click", function() {
    let randomColor = colorArr[getRandomColor()]
    main.style.backgroundColor = randomColor
    background.textContent = randomColor
    console.log(randomColor);
})

function getRandomColor() {
    return Math.floor(Math.random()*colorArr.length)
}