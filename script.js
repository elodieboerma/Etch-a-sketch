//select #container
const container = document.getElementById("container");
//let numSquares = 16
let number = 16;

function makeGrid(numSquaresInARow) {
        let numSquares = numSquaresInARow**2;
        for(j = 0; j < numSquares; j++) {
            //make div element
            let newBox = document.createElement("div");
            //add class gridSquare
            newBox.classList.add("gridSquare");
            //let gridSquare = document.getElementByClassName("gridSquare");
            newBox.style.width = (container.clientWidth / numSquaresInARow) + "px";
            //add as child to #container
            container.appendChild(newBox);

            //eventListener for mouseenter -- if not then try onmouseenter, or mouseover or mousemove
            newBox.addEventListener("mouseenter", () => newBox.classList.add("changeColor"));
        };
};

//select button
const button = document.querySelector("button");

makeGrid(number);

//listen for when button clicked
button.addEventListener("click", (/*numSquares not sure if needed here*/) => {
    //numSquares = prompt("questionHere")
    number = prompt("How many squares per row?")
    //run the js to make the grid again with the new numSquares values, but no change in total 
    // pixels used, need to use a function somehow???
    makeGrid(number);
});
