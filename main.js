const gridContainer = document.querySelector('.grid-container');
const gridSize = document.querySelector('input');
let squareSize = 8;
let gridValue = document.querySelector('.grid-size')
let apply = document.querySelector('.apply')
let resetButton = document.querySelector('.reset')

function createSquare (size) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    return square;
}

function createBlank(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            gridContainer.appendChild(createSquare(gridContainer.clientWidth / gridSize));
        }
    }
}

createBlank(squareSize);

gridContainer.addEventListener('mouseover', (e) => {
    if (e.target.matches('.square')) {
        e.target.classList.add('active');
    }
});

gridSize.addEventListener('input', (e) => {
    squareSize = e.target.value;
    gridValue.textContent = `${squareSize}X${squareSize}`;
});

function reset () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    createBlank(squareSize);
}

apply.addEventListener('click', () => {
    reset();
});

resetButton.addEventListener('click', reset);