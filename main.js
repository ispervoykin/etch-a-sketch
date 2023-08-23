function handleMouseEnter() {
    this.style.backgroundColor = 'black';
}

function handleMouseLeave() {
    console.log('Leave');
}

const grid = document.querySelector('.grid');
const gridWidth = parseInt(window.getComputedStyle(grid).maxWidth);
const gridHeight = parseInt(window.getComputedStyle(grid).maxHeight);
let gridSize = 30;

for (let i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.style.width = gridWidth / gridSize - 2 + "px";
    cell.style.height = gridHeight / gridSize - 2 + "px";

    cell.addEventListener('mouseenter', handleMouseEnter);
    cell.addEventListener('mouseleave', handleMouseLeave);

    console.log(gridWidth / gridSize - 2 + "px");
    grid.appendChild(cell);
}

