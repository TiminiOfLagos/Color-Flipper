document.title = "Color Flipper"
const background = document.getElementById("background")
const button = document.querySelector("#color")
const main = document.querySelector("main")

 // Function to generate a random number between min and max (inclusive)
 let getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random RGB color
const getRandomRGBColor = () => {
    const r = getRandomNumber(0, 255);
    const g = getRandomNumber(0, 255);
    const b = getRandomNumber(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}


// Adding a click event listener to the button and a function that updates the background color and the color text

button.addEventListener('click', setNewColor = () => {
    const randomColor = getRandomRGBColor();
    main.style.backgroundColor = randomColor;
    background.textContent = randomColor;
    console.log(randomColor);
   
});






