const container = document.getElementById("container");
let colorPicker = document.getElementById("colorPicker").value;
document.getElementById("colorPicker").onchange = function () {
    colorPicker = this.value;
    console.log(colorPicker)
}
const resetBtn = document.getElementById("resetBtn");
const colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");


resetBtn.onclick = () => createGrid();
colorBtn.onclick = () => colorMode();
rainbowBtn.onclick = () => rainbowMode();
eraserBtn.onclick = () => eraserMode();


let currentRows = 16
let currentColor = 'black'
let div;

function currentGrid() {
    currentColor = colorPicker;
    let x = currentRows * currentRows
    document.documentElement.style.setProperty("--columns-row", currentRows);
    for (let i = 0; i < x; i++) {
        div = document.createElement("div");
        container.appendChild(div);
        div.addEventListener("mouseenter", function () {
            this.style.backgroundColor = currentColor;
        });
    }
}
currentGrid();

function colorMode() {
    currentColor = colorPicker
    div = document.createElement("div");
    div.addEventListener("mouseenter", function () {
        this.style.backgroundColor = currentColor;
    });
}
// }
function rainbowMode() {
    currentColor = 'purple'
    div = document.createElement("div");
    div.addEventListener("mouseenter", function () {
        this.style.backgroundColor = currentColor;
    });
}

function eraserMode() {
    currentColor = 'white'
    div = document.createElement("div");
    div.addEventListener("mouseenter", function () {
        this.style.backgroundColor = currentColor;
    })
}

function createGrid() {
    let container = document.getElementById("container");
    container.innerHTML = '';
    currentRows = prompt("Select the amount of rows. Maximum is 100 rows. Numbers only!");
    // figure out how to loop until prompt is less than or equal to 100
    // add string conditional in here 
    if (currentRows > 100 || currentRows == 0) {
        alert("Please try again")
        currentRows = 16
        currentGrid()
    } else {
        currentGrid()
    }
}

//***TO DO
// figure out rainbow color generator function (currently defaults to 'purple')
// preventing string user input once program is reset
// design UI 