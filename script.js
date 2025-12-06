/* make 16x16 grid of square divs
for (i = 0; i < 256; i++) {
    let newGridBox = document.createElement("div");
    const container = document.getElementById("container");
    container.appendChild(newGridBox);
};*/

//select #container
const container = document.getElementById("container");
//let numSquares = 16
let numSquares = 16;

function makeGrid(numSquaresInARow) {
    //do this 16x; then the whole thing 16x again (or just do it 256x???)
    for(i = 0; i < 16; i++) {
        for(i = 0; i < 16; i++) {
            //make div element
            let newBox = document.createElement("div");
            //add class gridSquare
            newBox.addClass("gridSquare");
            //add as child to #container
            container.appendChild(newBox);

            //eventListener for mouseenter -- if not then try onmouseenter, or mouseover or mousemove
            newBox.addEventListener("mouseenter", () => newBox.addClass("changeColor"));
                //add .changeColor to element
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
