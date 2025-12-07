//select #container
const container = document.getElementById("container");
//let numSquares = 16
let numSquares = 16;

function makeGrid(numSquaresInARow) {
    //do this 16x; then the whole thing 16x again (or just do it 256x???)
    for(i = 0; i < 16; i++) {
        for(j = 0; j < 16; j++) {
            //make div element
            let newBox = document.createElement("div");
            //add class gridSquare
            newBox.classList.add("gridSquare");
            /*maybe try to do this w/ 16 first and then try to make it responsive once it shows up correctly?*/
            newBox.style.aspectRatio = "1 / 1";
            //let gridSquare = document.getElementByClassName("gridSquare");
            newBox.style.width = container.clientwidth / 16 + "px";
            //add as child to #container
            container.appendChild(newBox);

            //eventListener for mouseenter -- if not then try onmouseenter, or mouseover or mousemove
            newBox.addEventListener("mouseenter", () => newBox.classList.add("changeColor"));
        };
    };
};

//select button
const button = document.querySelector("button");

makeGrid(numSquares);

//listen for when button clicked
button.addEventListener("click", (/*numSquares not sure if needed here*/) => {
    //numSquares = prompt("questionHere")
    numSquares = prompt("How many squares per row?")
    //run the js to make the grid again with the new numSquares values, but no change in total 
    // pixels used, need to use a function somehow???
    makeGrid(numSquares);
});
