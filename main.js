function handleMouseEnter(e) {
    if (e.buttons === 1) {
        this.classList.add('colored');
    }
}

function handleMouseClick() {
    this.classList.add('colored');
}

function generateGrid(gridSize) {

    const previousGrid = document.querySelector('.grid')
    if (previousGrid) {
        content.removeChild(previousGrid);
    }

    const newGrid = document.createElement('div');
    newGrid.classList.add('grid');
    const gridWidth = 600;
    const gridHeight = 600;
    content.appendChild(newGrid);

    for (let i = 0; i < gridSize ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.style.width = gridWidth / gridSize - 2 + "px";
        cell.style.height = gridWidth / gridSize - 2 + "px";
    
        cell.addEventListener('mouseover', handleMouseEnter);
        
        cell.addEventListener('click', handleMouseClick);
    
        cell.addEventListener('dragstart', e => {
            e.preventDefault();
        });
    
        newGrid.appendChild(cell);
    }
}

const content = document.querySelector('.content');

let gridSize = 20;
generateGrid(gridSize);

const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');

slider.addEventListener('input', function() {
    sliderValue.textContent = `${this.value} x ${this.value}`;
    generateGrid(this.value);
})

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
    const colored = document.querySelectorAll('.colored');

    colored.forEach(cell => {
        cell.classList.remove('colored');
    });
})