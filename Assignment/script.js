function createChessboard() {
    const chessboard = document.getElementById('chessboard');
    let count = 1;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell ' + (count % 2 === 0 ? 'even' : 'odd');
            cell.innerText = count++;
            chessboard.appendChild(cell);
        }
    }
}

function rollDice() {
    if (currentPosition >= winningCell - manipulationRange && currentPosition < winningCell) {
        return Math.min(Math.floor(Math.random() * (requiredSteps - 1)) + 1, winningCell - currentPosition);
    } else {
        return Math.floor(Math.random() * 6) + 1;
    }
}

function updatePosition(steps) {
    const newPosition = (currentPosition + steps) % 100;

    if (currentPosition < winningCell && newPosition > winningCell && newPosition - winningCell < steps) {
        return;
    }

    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('active');
        const redBox = cell.querySelector('.active-box');
        if (redBox) {
            redBox.remove();
        }
    });

    currentPosition = newPosition >= winningCell ? winningCell : newPosition;

    const currentCell = document.querySelectorAll('.cell')[currentPosition];
    currentCell.classList.add('active');

    const redBox = document.createElement('div');
    redBox.className = 'active-box';
    currentCell.appendChild(redBox);

    const diceResultElement = document.getElementById('diceResult');
    diceResultElement.innerText = `Dice Result: ${steps}`;

    if (currentPosition === winningCell) {
        setTimeout(function () {
            alert('You won!');
            resetGame();
        }, 200);
    }
}

function resetGame() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('active');
        const redBox = cell.querySelector('.active-box');
        if (redBox) {
            redBox.remove();
        }
    });

    const initialCell = document.querySelectorAll('.cell')[0];
    initialCell.classList.add('active');
    const redBox = document.createElement('div');
    redBox.className = 'active-box';
    initialCell.appendChild(redBox);

    const diceResultElement = document.getElementById('diceResult');
    diceResultElement.innerText = '';
    
    currentPosition = 0;
}
document.getElementById('diceRoll').addEventListener('click', function () {
    const steps = rollDice();
    updatePosition(steps);
});
document.getElementById('resetGame').addEventListener('click', resetGame);

createChessboard();
let currentPosition = 0;
const winningCell = 99; 
const requiredSteps = 3; 
const manipulationRange = 5; 

const initialCell = document.querySelectorAll('.cell')[0];
initialCell.classList.add('active');
const redBox = document.createElement('div');
redBox.className = 'active-box';
initialCell.appendChild(redBox);