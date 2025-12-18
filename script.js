//select #container
const container = document.getElementById("container");
//let numSquares = 16
let number = 16;

function changeColor(item) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.1
    item.style.backgroundColor = `rgb(${r},${g},${b},${a})`;
}

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
            newBox.addEventListener("mouseenter", () => {
                changeColor(newBox);
            });
        };
};

//select button
const button = document.querySelector("button");

makeGrid(number);

//listen for when button clicked
button.addEventListener("click", (/*numSquares not sure if needed here*/) => {
    //numSquares = prompt("questionHere")
    number = prompt("How many squares per row?")
    //limit is 100 squares per row
    while (number > 100) {
        number = prompt("Too big. Please enter a number less than or equal to 100.");
    };
    //remove current grid
    while (container.hasChildNodes()) {
        container.removeChild(container.children[0]);
    };
    //make new grid with new value of number
    makeGrid(number);
});
