function getRandomInt(rightBound) {
    return Math.floor(Math.random() * (rightBound+1));
}

function cellHandleMouseEnter(e) {
    if (e.buttons === 1) {
        switch (inputMode) {
            case -1:
                this.style.background = 'white';
                break;
            case 0:
                this.style.background = 'black';
                this.classList.add('colored');
                break;
            case 1:
                this.style.background = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
                this.classList.add('colored');
                break;
        }
    }
}

function cellHandleMouseClick() {
    if (inputMode == 0) {
        this.style.background = 'black';
    } else if (inputMode == 1) {
        this.style.background = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
    }
    this.classList.add('colored');
}

function inputModeHandleClick() {
    if (inputMode != -1) {
        inputMode = (inputMode + 1) % 2;
        prevInputMode = inputMode;
        this.textContent = inputModeList[inputMode];
    } else {
        inputMode = prevInputMode;
    }
}

function generateGrid(gridSize) {

    const previousGrid = document.querySelector('.grid')
    if (previousGrid) {
        content.removeChild(previousGrid);
    }

    const newGrid = document.createElement('div');
    newGrid.classList.add('grid');
    const gridWidth = 700;
    content.appendChild(newGrid);

    for (let i = 0; i < gridSize ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.style.width = gridWidth / gridSize - 2 + "px";
        cell.style.height = gridWidth / gridSize - 2 + "px";
    
        cell.addEventListener('mouseover', cellHandleMouseEnter);
        
        cell.addEventListener('click', cellHandleMouseClick);
    
        cell.addEventListener('dragstart', e => {
            e.preventDefault();
        });
    
        newGrid.appendChild(cell);
    }
}

let inputMode = 0;
let inputModeList = ['Black ink', 'Funky ink'];
let prevInputMode = inputMode;

const content = document.querySelector('.content');

let gridSize = 20;
generateGrid(gridSize);

const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
slider.addEventListener('input', function() {
    sliderValue.textContent = `${this.value} x ${this.value}`;
    generateGrid(this.value);
})

const clearer = document.querySelector('.clearer');
clearer.addEventListener('click', () => {
    const colored = document.querySelectorAll('.colored');

    colored.forEach(cell => {
        cell.style.background = 'white';
        cell.classList.remove('colored');
    });
    inputMode = prevInputMode;
})

const inputModeButton = document.querySelector('.input-mode-button');
inputModeButton.addEventListener('click', inputModeHandleClick);

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
    inputMode = -1;
})