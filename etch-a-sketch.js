// Create a 16x16 grid with square div

// create a 16x16 grid square divs
const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
const cell = document.createElement('div')
cell.style.border = '1px solid black';
cell.classList.add('cell');
container.appendChild(cell);
}
// console.log(container);

// "Hover" effect to change cell color
const grid = Array.from(document.querySelectorAll('.cell'));
grid.forEach(cell => cell.addEventListener('mouseover', toBlack));

function toBlack(e) {
    e.target.style.backgroundColor = 'black';
}
// console.log(grid);

// Prompt for number of squares per side
const reset = document.querySelector('#reset');
reset.addEventListener('click', gridSize);

function gridSize() {
    let value = prompt("How many squares per side? (100 maximum)");
    if (value > 100) {
        let val = prompt("Enter a number between 0 and 100 ");
        return generateGrid(val) 
    } else {
        return generateGrid(value);
    }    
}

// Create new grid and change color to black

function generateGrid(value) {

    container.innerHTML = '';
    container.setAttribute('style', `grid-template-columns: repeat(${value}, minmax(0, 1fr));
    grid-template-rows: repeat(${value}, minmax(0, 1fr));`);
    let size = Math.pow(value, 2);

    for (let i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.style.border = '1px solid black';
        cell.classList.add('.cell');
        container.appendChild(cell);
        cell.addEventListener('mouseover', toBlack)
    }  
    // console.log(container);
}
