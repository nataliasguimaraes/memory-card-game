

// Responsável pelo o display de música
const musicData = ['./src/music/audio01.mp3','./src/music/audio02.mp3','./src/music/audio03.mp3','./src/music/audio04.mp3','./src/music/audio05.mp3','./src/music/audio06.mp3']

const $audio = document.getElementsByClassName('audioControls')

$audio[0].src=musicData[Math.floor(Math.random() * musicData.length)]

const cardBoard = document.querySelector("#cardboard");
const imgs = [
  "2poke.svg",
  "4digimon.svg",
  "10db.svg",
  "6sakura.svg",
  "7saylor.svg",
  "8naruto.svg"
];

let cardHTML = "";

imgs.forEach(img => {
  cardHTML += `<div class="memory-card" data-card="${img}">
    <img class="front-face" src="img/${img}"/>
    <img class="back-face" src="img/1fundo.svg">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;



const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let lockCards = false;

function flipCard() {
  if (lockCards) return false;
  this.classList.add("flip");

  if (!firstCard) {
    firstCard = this;
    return false;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;

  !isMatch ? unFlipCards() : resetCards(isMatch);
}

function unFlipCards() {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetCards();
  }, 1000);
}

function resetCards(isMatch = false) {
  if (isMatch) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  }

  [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipCard));