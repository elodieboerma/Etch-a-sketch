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

/*maybe try to do this w/ 16 first and then try to make it responsive once it shows up correctly?*/
let gridSquare = document.getElementsByClassName("gridSquare");
gridSquare.style.aspect-ratio:  1 / 1 | initial | inherit;
/*aspect-ratio: 1 / 1;*/
gridSquare.style.width = container.width / 16;
/*gridSquare.style.height = /*gridSquare.style.width; auto;*/
    /*not sure how to do this correctly in css*/
        /*actually might have to do this in js, will see if I can leave height in here*/
        /*or maybe could put aspect-ratio: 1 - 1 above specified dimension and leave the other alone
    /*height = width*/
    /*height: width;*/ /*same comment as for width*/
        /*I think the red underlining will be fixed when the width line is fixed*/

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
