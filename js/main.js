// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card];

// deck of all cards in game
const deck = document.getElementById("card-deck");

// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");

// declaring variable of matchedCards
let matchedCard = document.getElementsByClassName("match");

 // close icon in modal
 let closeicon = document.querySelector(".close");

 // declare modal
 let modal = document.getElementById("popup1");

 // array for opened cards
var openedCards = [];

// Description shuffles cards
// Param {array}
// Returns shufflearray
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};


// Description shuffles cards when page is refreshed / loads
document.body.onload = startGame();

// Function btn "Démarrer une partie"
function play() {
    let startBtn = document.getElementById("btnNewGame");
    var decompte = new Audio("sounds/Décompte.mp3")
    decompte.play();
    setTimeout(function(){document.location.href="Game.html";},4000);
};

// Description function to start a new play
function startGame(){
    // Empty the openCards array
    openedCards = [];

    // Shuffle deck
    cards = shuffle(cards);
    // remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    // Reset moves
    moves = 0;
    counter.innerHTML = moves + " " + 'mouvements';

    // Reset timer
    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}

// Description toggles open and show class to display cards
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};


// Description add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

// Description when cards match
function matched(){
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];
    var soundMatched = new Audio ("sounds/bravo.mp3");
    soundMatched.volume=1;
    soundMatched.play()
}


// Description when cards don't match
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedCards = [];
    },1100);
}


// Description disable cards temporarily
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}


// Description enable cards and disable matched cards
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}


var soundStart = new Audio ("sounds/AcidTrips.mp3");
// Description count player's moves
function moveCounter(){
    moves++;
    counter.innerHTML = moves + " " + 'mouvements';
    // Start timer on first click
    if(moves == 1){
        soundStart.volume=0.35;
        soundStart.play();
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}

// Description game timer
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute + " " + "mins" + " " + second + " " + "secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

// Description congratulations when all cards match, show modal and moves, time and rating
function congratulations(){
    if (matchedCard.length == 12){
        soundStart.pause();
        clearInterval(interval);
        finalTime = timer.innerHTML;
        // Show congratulations modal
        modal.classList.add("show");
        // Showing move, rating, time on modal
        document.getElementById("finalMove").innerHTML = moves + " " + 'mouvements';
        document.getElementById("totalTime").innerHTML = finalTime;
        var soundCongratulations = new Audio("sounds/WeAreTheChampions.mp3");
        soundCongratulations.play();
        soundCongratulations.volume=1;
        // Closeicon on modal
        closeModal();
    };
}

// Description close icon on modal
function closeModal(){
        closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        document.location.href='index.html';
    });
}

// Desciption for user to play Again
function playAgain(){
    modal.classList.remove("show");
    document.location.reload(true);
}

// Loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click",congratulations);
};

// Security
// Function to disable right click
document.oncontextmenu = new Function("return false");

// Function to deactivate selection
// function fFalse(){
//     return false;
// }
// function fTrue(){
//     return true;
// }
// document.onselectstart = new Function ("return false");
// if(window.sidebar){
//     document.onmousedown = fFalse;
//     document.onclick = fTrue;
// }

// Fun function to create an image that follows the cursor
// document.onmousemove = suitsouris;
// function suitsouris(evenement){
//     var x =  evenement.pageX;
//     var y =  evenement.pageY;
//     document.getElementById("imageSuitSouris").style.left = (x+1)+'px';
//     document.getElementById("imageSuitSouris").style.top  = (y+1)+'px';
// }