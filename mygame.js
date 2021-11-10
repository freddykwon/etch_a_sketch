
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
let square;

function currentGrid() {
    currentColor = colorPicker;
    let x = currentRows * currentRows
    document.documentElement.style.setProperty("--columns-row", currentRows);
    for (let i = 0; i < x; i++) {
        square = document.createElement("div");
        square.classList.add('grid-item');
        container.appendChild(square);
    }
}
currentGrid();
colorMode();

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function colorMode() {
    let items = document.querySelectorAll('.grid-item')
    items.forEach(item => {
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = `${colorPicker}`;
        });
    });
}

function rainbowMode() {
    let items = document.querySelectorAll('.grid-item')
    items.forEach(item => {
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = `${getRandomColor()}`;
        });
    });
}

function eraserMode() {
    let items = document.querySelectorAll('.grid-item')
    items.forEach(item => {
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = 'white';
        });
    });
}

function createGrid() {
    let container = document.getElementById("container");
    container.innerHTML = '';
    currentRows = parseInt(prompt("Select the amount of rows. Maximum is 100 rows. Numbers only!"));
    // figure out how to loop until prompt is less than or equal to 100
    // add string conditional in here 
    //use parseint 
    if (currentRows > 100 || currentRows == 0) {
        alert("Please try again")
        currentRows = 16
        currentGrid()
    } else {
        currentGrid()
    }
    colorMode();
}


//***TO DO
// slider for createGrid();
// design UI 