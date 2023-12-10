let startBtn = document.getElementById("start");
let wrongT = 0;
startBtn.onclick = function () { 
    
    document.getElementsByClassName("splash-screen")[0].style.display = "none";  
    var userNam = prompt("ادخل اسمك", "زائر");  
    if ( userNam != null) {  
    document.getElementById("user-name").innerHTML = userNam;  
    } 
    document.getElementById("wrong-trial").innerHTML = wrongT;     
};
let cards = document.querySelectorAll(".card");
let randomArr;

shuffle();
console.log(randomArr);
cards.forEach((card, index) => { 
    card.style.order = randomArr[index];
    card.addEventListener('click', () => {
        flipCard(card);
    });
    
});

function shuffle() {
    randomArr = [];
    for (let i = 0 ; i < cards.length; i++) {
    let randomNumber = Math.round(Math.random() * cards.length);
    if (!randomArr.includes(randomNumber)) {
        randomArr.push(randomNumber);
        }
    }
/*     randomArr = Array.from(
        { length: cards.length },
        () => Math.floor(Math.random() * cards.length) + 1); */
}

function flipCard(card) {
    card.classList.add("card-flip");

    let flipCardsCard = [...cards].filter(fCards => fCards.classList.contains('card-flip'));

    if (flipCardsCard.length === 2) {
        lockBoard();
        checkMatch(flipCardsCard[0],flipCardsCard[1]);
    }
}

function lockBoard() {
    let cardBlock = document.querySelector(".cards-block");
    cardBlock.classList.add("lock");
    setTimeout(() => { 
        cardBlock.classList.remove("lock");        
    }
    ,1000);
}

function checkMatch(firstCard,secondCard) {
    if (firstCard.dataset.weather === secondCard.dataset.weather) {
        firstCard.classList.remove("card-flip");
        secondCard.classList.remove("card-flip");

        firstCard.classList.add("card-flip-succes");
        secondCard.classList.add("card-flip-succes");

        document.getElementById("success").play();
    } else {
        setTimeout(() => {
            firstCard.classList.remove("card-flip");
            secondCard.classList.remove("card-flip");
        },1000);
        document.getElementById("fail").play();
        wrongT++
        document.getElementById("wrong-trial").innerHTML = wrongT;
    }
}

/*
function arangeCards() {
    const randomArr = Array.from(
        { length: cards.length },
        () => Math.floor(Math.random() * cards.length) + 1);
for (let index = 0; index < cards.length; index++) {
    cards[index].style.order = randomArr[index];    
}
}


let cardFlpCount = 0;
let lockBoard = false;
let orderCard =0;
cards.forEach((card) => {
    card.addEventListener('click', (e) => {        
        console.log(orderCard);
        console.log(card.style.order);
        if (orderCard === card.style.order) {
            cardFlpCount = 0;
            orderCard = 0;
            card.classList.remove("card-flip");
            return;
        }
        if (!lockBoard) {
            orderCard = card.style.order;
            cardFlpCount++;
            card.classList.add("card-flip");
            if (cardFlpCount === 2) {
                lockBoard = true;
                let flpdCards = document.querySelectorAll(".card-flip");
            
                if (flpdCards[0].dataset.weather === flpdCards[1].dataset.weather) {
                    flpdCards[0].classList.add("card-flip-succes");
                    flpdCards[1].classList.add("card-flip-succes");
                } else {
                    wrongT++
                    document.getElementById("wrong-trial").innerHTML = wrongT;
                }
                setTimeout(() => {
                    flpdCards.forEach((fliped) => {
                        fliped.classList.remove("card-flip");
                        cardFlpCount = 0;
                        orderCard = 0;
                        lockBoard = false;
                        console.log(lockBoard + "te");
                    });
                }, 1500);
            }
        }
        });
    
});

 */