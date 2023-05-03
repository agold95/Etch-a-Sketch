const container = document.querySelector('.container');
const gridSize = 16;

createBlank(gridSize);

function createSquare () {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = '16px';
    square.style.height = '16px';
    return square;
}

function createBlank(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            container.appendChild(createSquare());
        }
    }
}