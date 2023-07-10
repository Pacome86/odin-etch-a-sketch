// Initial grid: a 16x16 grid with square divs

const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
const cell = document.createElement('div')
cell.style.border = '1px solid black';
cell.classList.add('cell');
container.appendChild(cell);
}

// Buttons:

// Button to prompt for number of squares per side
const reset = document.querySelector('#reset');
reset.addEventListener('click', gridSize);

// Button to change the color from white to black
const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', blackInk);

// Button to change the color from white to random color
const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('click', rainbowInk);

// Button to clear or return to initial grid
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear);


// Actions:

// Change grid size based on prompt
function gridSize() {
    let value = prompt("How many squares per side? (100 maximum)");
    if (value > 100) {
        let val = prompt("Enter a number between 0 and 100 ");
        return generateGrid(val); 
    } else {
        return generateGrid(value);
    }
}

// Create new grid
function generateGrid(value) {
    container.innerHTML = '';
    container.setAttribute('style', `grid-template-columns: repeat(${value}, minmax(0, 1fr));
    grid-template-rows: repeat(${value}, minmax(0, 1fr));`);
    let size = Math.pow(value, 2);

    for (let i = 0; i < size; i++) {
        const newCell = document.createElement('div');
        newCell.style.border = '1px solid black';
        newCell.classList.add('.newCell');
        container.appendChild(newCell);
    }   
}

// Background of squares/cell to black
function toBlack(e) {
    e.target.style.backgroundColor = 'black';
}

// Background of squares/cell to random color
function toRainbow(e) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const cellBgColor = 'rgb(' + red + ',' + ' ' + green + ',' + ' ' + blue + ')';
    e.target.style.backgroundColor = cellBgColor; 
}

//  Change the color of each squares/cell to black
function blackInk() {
    const grid = Array.from(document.querySelectorAll('.cell'));
    grid.forEach(cell => cell.addEventListener('mouseover', toBlack)); 
    const newGrid = Array.from(document.getElementsByClassName('.newCell'));
    newGrid.forEach(newCell => newCell.addEventListener('mouseover', toBlack));
 }

 //  Change the color of each squares/cell to random color
function rainbowInk() {
    const grid = Array.from(document.querySelectorAll('.cell'));
    grid.forEach(cell => cell.addEventListener('mouseover', toRainbow));

    const newGrid = Array.from(document.getElementsByClassName('.newCell'));
    newGrid.forEach(newCell => newCell.addEventListener('mouseover', toRainbow));    
}

// Return  grid to initial state
function clear() {
    document.location.reload();   
}
