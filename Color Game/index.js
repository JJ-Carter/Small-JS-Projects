var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector('#reset');
//var easyBtn = document.querySelector(".easy");
//var hardBtn = document.querySelector(".hard");
var modeBtns = document.querySelectorAll(".mode");

//Put everything that needs to run when the page loads
init();

function init() {
    //mode buttons event listeners
    setupModeBtns();
    //changes the color of each square
    setupSquares();
    //reset the screen
    reset();
}

function setupModeBtns() {
    //mode button event listeners
    for(var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function(){
           modeBtns[0].classList.remove("selected");
           modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            //ternary operator instead of long if else statement
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            /*if(this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6;
            }*/
            reset();
        });
    }
}

function setupSquares() {
    //changes the color of each square
    for(var i = 0; i < squares.length; i++) {
        //add click listeners to square
        squares[i].addEventListener("click", function() {
            //grab color of picked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of square
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
}

/*
easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});
*/

resetBtn.addEventListener("click", function() {
    reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an arr
    var arr = []
    //add num random colors to array
    for(var i = 0; i < num; i++) {
        //get random color push into array
        arr.push(randomColor());

    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256) 
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256)
    "rgb(r,g,b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
