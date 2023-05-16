document.title = "Color Flipper"
const background = document.getElementById("background")
const button = document.querySelector("#color")
const main = document.querySelector("main")

let colorArr = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

button.addEventListener("click", function() {
    hexadecimal = "#"

  for (i=0; i<6; i++){
    hexadecimal += colorArr[getRandomColor()]
  }
  console.log(hexadecimal);
  main.style.backgroundColor = hexadecimal
  background.textContent = hexadecimal
})

function getRandomColor() {
    return Math.floor(Math.random()*colorArr.length)
}