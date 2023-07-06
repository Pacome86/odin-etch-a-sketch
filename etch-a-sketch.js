// Create a 16x16 grid with square div

const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}
// console.log(container);

// Set-up a "hover" effect so that the grid divs change color 
// when the mouse passes over them 
const squares = Array.from(document.querySelectorAll('.square'));
console.log(squares);
squares.forEach(div => div.addEventListener('mouseover', changeColor));

function changeColor(e) {
    // console.log(e);
    e.target.style.backgroundColor = 'black';
}