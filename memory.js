const cards = document.querySelectorAll('.memory-card');


let FlippedCard =  false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!FlippedCard){
        //first click
        FlippedCard = true;
        firstCard =  this;
        return;
    }
    
    //second click
    FlippedCard = false;
    secondCard =  this;

    checkformatch();
}


function checkformatch(){
    if (firstCard.dataset.name === secondCard.dataset.name) {
    disableCards();      
    } else {
      unfilpCards();  
    }
}

function disableCards(){ 
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);  
}

function unfilpCards(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard =  false;
    }, 400);
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() *24);
        card.style.order = randomPos; 
    });
})();  // '()' Example of: IIFE, i.e. Immediately Invoked Function Expression

cards.forEach(card=> card.addEventListener('click', flipCard));