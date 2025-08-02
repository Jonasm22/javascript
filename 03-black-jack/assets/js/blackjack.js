(() => {
    'use strict'

    let deck = [];
    const cardTypes = ['C', 'D', 'H', 'S'],
          nonNumberCards = ['A', 'J', 'Q', 'K'];

    let playerPoint = [];

    // HTML references
    const btnNew = document.querySelector('#btnNew'),
          btnDraw = document.querySelector('#btnDraw'),
          btnStop = document.querySelector('#btnStop');

    const divPlayerCards = document.querySelectorAll('.divCards'); 
    const points = document.querySelectorAll('small');

    const startGame = (numPlayers = 2) => {
        deck = createDeck();
        playerPoint = [];

        for (let i = 0; i < numPlayers; i++) {
            playerPoint.push(0);
        }

        points.forEach(elem => elem.innerText = 0);
        divPlayerCards.forEach(elem => elem.innerHTML = '');

        btnDraw.disabled = false;
        btnStop.disabled = false;
    };

    const createDeck = () => {
        deck = [];

        for (let i = 2; i <= 10; i++) {
            for (let type of cardTypes) {
                deck.push(i + type);
            }
        }

        for (let type of cardTypes) {
            for (let nc of nonNumberCards) {
                deck.push(nc + type);
            }
        }

        return _.shuffle(deck);
    };

    const drawCard = () => {
        if (deck.length === 0) {
            throw 'deck empty, no more cards available';
        }
        return deck.pop();
    };

    const valueCard = (card) => {
        const value = card.substring(0, card.length - 1);
        return isNaN(value) ? (value === 'A' ? 11 : 10) : Number(value);
    };

    const accumulatePoints = (card, turn) => {
        playerPoint[turn] += valueCard(card);
        points[turn].innerText = playerPoint[turn];
        return playerPoint[turn];
    };

    const createCard = (card, turn) => {
        const imgCard = document.createElement('img');
        imgCard.src = `assets/cards/${card}.png`;
        imgCard.classList.add('cards');
        divPlayerCards[turn].append(imgCard);
    };

    const winner = () => {
        const [minimumPoints, computerPoints] = playerPoint;

        setTimeout(() => {
            if (computerPoints === minimumPoints) {
                alert('It\'s a draw');
            } else if (minimumPoints > 21) {
                alert('Computer wins');
            } else if (computerPoints > 21) {
                alert('Player wins');
            } else {
                alert('Computer wins');
            }
        }, 100);
    };

    const computerTurn = (minimumPoints) => {
        let computerPoints = 0;

        do {
            const card = drawCard();
            computerPoints = accumulatePoints(card, playerPoint.length - 1);
            createCard(card, playerPoint.length - 1);
        } while (computerPoints < minimumPoints && minimumPoints <= 21);

        winner();
    };

    // Event listeners

    btnDraw.addEventListener('click', () => {
        const card = drawCard();
        const currentPoints = accumulatePoints(card, 0);
        createCard(card, 0);

        if (currentPoints > 21) {
            btnDraw.disabled = true;
            btnStop.disabled = true;
            computerTurn(currentPoints);
        } else if (currentPoints === 21) {
            btnDraw.disabled = true;
            btnStop.disabled = true;
            computerTurn(currentPoints);
        }
    });

    btnStop.addEventListener('click', () => {
        btnDraw.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoint[0]);
    });

    btnNew.addEventListener('click', () => {
        startGame();
    });

    return {
        newGame: startGame
    };

})();
