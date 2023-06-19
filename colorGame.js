let numSquares = 6;
let colors = [];
let pickedColor; 
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();    
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {

        // squares[i].style.backgroundColor = colors[i];
         squares[i].addEventListener("click", function(){
         let clickedColor = this.style.backgroundColor;
         
         if (clickedColor === pickedColor)
         {
             messageDisplay.textContent = "Correct!";
             changeColors(clickedColor); 
             h1.style.backgroundColor = clickedColor;
             resetButton.textContent = "Play Again?";
         }
         else
         {
             this.style.backgroundColor = "#232323";
             messageDisplay.textContent = "Try Again";
         }
       })
     }
}


function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from the array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {

        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color) {
    //loop through each square
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    //change each color to match given color

}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
        //get random color and push into array

    }
    //return array
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
