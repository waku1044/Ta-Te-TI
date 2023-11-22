const squares = document.querySelectorAll('.square');
const players = document.querySelectorAll('header p');
let count = 0;

const initializeGame = () => {
    players[0].style.background = 'forestgreen';
    players[0].style.padding = '10px 20px';
    players[0].style.borderRadius = '15px';
}

const switchPlayerStyles = (activePlayer, inactivePlayer) => {
    activePlayer.style.background = 'forestgreen';
    activePlayer.style.padding = '10px 20px';
    activePlayer.style.borderRadius = '15px';
    inactivePlayer.style.background = 'none';
}

const turn = (targetSquare) => {
    count++;
    const currentPlayer = count % 2 === 0 ? players[1] : players[0];
    const otherPlayer = count % 2 !== 0 ? players[1] : players[0];

    if (!targetSquare.hasChildNodes()) {
        placeSymbol(targetSquare, currentPlayer);
        switchPlayerStyles(currentPlayer, otherPlayer);
        checkWinner('X');
        checkWinner('O');
    }
}

const placeSymbol = (targetSquare, currentPlayer) => {
    const symbol = document.createElement('h2');
    symbol.innerHTML = count % 2 === 0 ? 'O' : 'X';
    symbol.style.fontSize = '4rem';
    targetSquare.appendChild(symbol);
}

const checkWinner = (symbol) => {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    if (winConditions.some(condition => isWinningCondition(condition, symbol))) {
        handleWinner(symbol);
    }
}

const isWinningCondition = (condition, symbol) => {
    return condition.every(index => squares[index].innerText === symbol);
}

const handleWinner = (symbol) => {
    const winningPlayer = symbol === 'X' ? players[0] : players[1];
    const modal = document.querySelector('dialog');
    const form = document.querySelector('.form');

    switchPlayerStyles(winningPlayer, symbol === 'X' ? players[1] : players[0]);
    modal.classList.remove('hidden');

    const h2 = document.createElement('h2');
    h2.innerText = `PLAYER ${symbol === 'X' ? '1' : '2'} WINS`;
    h2.style.fontWeight = 'bold';

    const img = document.createElement('img');
    img.src = 'https://www.pinclipart.com/picdir/middle/29-299537_cup-clipart.png';
    img.classList.add('cup');

    const button = document.createElement('button');
    button.innerText = 'Restart';
    button.classList.add('w-75', 'btn', 'btn-primary', 'fw-bold');
    button.setAttribute('type', 'submit');

    form.appendChild(h2);
    form.appendChild(img);
    form.appendChild(button);
    modal.show();
}

initializeGame();

squares.forEach(square => square.addEventListener('click', (e) => turn(e.target)));
