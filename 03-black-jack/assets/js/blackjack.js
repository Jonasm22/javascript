/*
*  2C = Two of Clubs
*  2D = Two of Diaminds
*  2H = Two of Hearts
*  2S = Two of Spades
*/

let deck =             []
const cardTypes =      ['C','D','H','S']
const nonNumberCards = ['A','J','Q','K']
let originalDeck = [...deck]

let playerPoint = 0 ,
    computerPoint = 0;

//HTML references
const btnNew = document.querySelector('#btnNew')
const btnDraw = document.querySelector('#btnDraw')
const btnStop = document.querySelector('#btnStop')
const divPlayerCards = document.querySelector('#player-cards')
const divComputerCards = document.querySelector('#computer-cards')
const points = document.querySelectorAll('small');


// this function creates a new deck
const createDeck = () =>{
    for(let i = 2; i<=10; i++){
        for(let type of cardTypes){
            deck.push(i+ type)
        }

    }

    for(let type of cardTypes){
        for(let nc of nonNumberCards){
            deck.push(nc + type)
        }

    }
    //console.log(deck)
    deck = _.shuffle(deck)
    console.log(deck)


    return deck;

}

createDeck()
//console.log(deck)

//this funcion draw cards

const drawCard = () =>{

    if(deck.length === 0){
        throw 'deck empty, no more cards avalible'
    }
    
    const card = deck.pop();
   // console.log(deck)
    //console.log(card)

return card;
}

drawCard();

const valueCard = (card) =>{
    const value = card.substring(0, card.length -1);
    return (isNaN (value) ) ? 
        (value === 'A') ? 11:10
        : value * 1

}

//Computer turns

const computerTurn = (minimumPoints) =>{

   do {

    const card = drawCard();
    
    computerPoint = computerPoint + valueCard(card);
    points[1].innerText = computerPoint;

    //console.log(playerPoint)

    //<!-- <img class="cards" src="assets/cards/10C.png" alt="cards"> -->
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cards/${card}.png`;
    imgCard.classList.add('cards'); //class="cards"

    divComputerCards.append(imgCard);
    
    if(minimumPoints > 21){
        break;
    }

    } while ((computerPoint < minimumPoints) && (minimumPoints<= 21)) ;


    setTimeout(() => {
        
        if(computerPoint === minimumPoints){
            alert('its a draw')
        }else if (minimumPoints > 21){
            alert('Computer wins')
        } else if (computerPoint > 21){
            alert('Player win')
        } else{
            alert('computer wins')
        }

    }, 100);

   
}






/*addEventListener*/

btnDraw.addEventListener('click' , () => {

    const card = drawCard();
    playerPoint = playerPoint + valueCard(card);
    points[0].innerText = playerPoint;

    //console.log(playerPoint)

    //<!-- <img class="cards" src="assets/cards/10C.png" alt="cards"> -->
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cards/${card}.png`;
    imgCard.classList.add('cards'); //class="cards"

    divPlayerCards.append(imgCard);

    if(playerPoint > 21){
       // console.warn('You Lose');
       btnDraw.disabled = true;
       btnStop.disabled = true;
       
        
        computerTurn(playerPoint);
    } else if ( playerPoint === 21){
      //  console.warn('21');
      btnDraw.disabled = true;
      btnStop.disabled = true;
      computerTurn(playerPoint);
      
    }



   

})



btnStop.addEventListener('click' , () => {
   
    btnDraw.disabled = true;
    btnStop.disabled = true;
    computerTurn(playerPoint);
    
});


btnNew.addEventListener('click' , () =>{
   deck = [];
 createDeck();
 playerPoint = 0;
 computerPoint = 0;
 points[0].innerText = 0;
 points[1].innerText = 0;

 divComputerCards.innerHTML = '';
divPlayerCards.innerHTML = '';
btnDraw.disabled = false;
btnStop.disabled = false;
})
