const container = document.getElementById("container");
let colorPicker = document.getElementById("colorPicker").value;
document.getElementById("colorPicker").onchange = function () {
    colorPicker = this.value;
    console.log(colorPicker)
}

const resetBtn = document.getElementById("resetBtn");
const colorBtn = document.getElementById("colorBtn");
const skyBtn = document.getElementById("skyBtn");
const eraserBtn = document.getElementById("eraserBtn");

resetBtn.onclick = () => createGrid();
colorBtn.onclick = () => colorMode();
skyBtn.onclick = () => coolMode();
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

function getCoolColor() {
    const coolColors = ["#2389da", "#1ca3ec", "#5abcd8", "#74ccf4", "#49e8ff"]
    let randomColor = Math.floor(Math.random() * 5)
    let color = coolColors[randomColor]
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

function coolMode() {
    let items = document.querySelectorAll('.grid-item')
    items.forEach(item => {
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = `${getCoolColor()}`;
        });
    });
}

function eraserMode() {
    let items = document.querySelectorAll('.grid-item')
    items.forEach(item => {
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = "#edf2fb";
        });
    });
}

function createGrid() {
    let container = document.getElementById("container");
    container.innerHTML = '';
    currentRows = prompt("Select the amount of rows. Maximum is 100 rows. Numbers only!");
    console.log(currentRows)

    if (currentRows >= 0 && currentRows <= 100) {
        currentGrid();
    } else if (typeof currentRows == "string") {
        alert("Please try again")
        currentRows = 16
        currentGrid();
    }
    colorMode();
}
