let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let hasBJ = false
let isAlive = true
let message = " "
let messageEl = document.getElementById("message-el")
let messageResult = document.getElementById("message-result")
let messageCards = document.getElementById("message-cards")

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if (random > 10) {
        return 10;
    }
    else if (random == 1) {
        return 11;
    } else {
        return random;
    }

}
function StartGame() {

    renderGame()

}
function renderGame() {
    for (let i = 0; i < cards.length; i++) {
        messageCards.textContent += cards[i] + " "
    }
    if (sum < 21) {
        messege = "Do you want to draw a new Card?"
    }
    else if (sum === 21) {
        messege = "WHOOOOH YOU WON"
        hasBJ = true
    }
    else {
        messege = "You are OUT!!!!"
        isAlive = false
        message = "We are logging out!"
    }
    messageEl.textContent = messege
    messageResult.textContent = "SUM: " + sum
    messageCards.textContent = "Cards: " + cards[0] + "-" + cards[1]
}

function NewCard() {
    console.log("Drawing new card.")
    let card = getRandomCard();
    cards.push(card)
    sum += card
    StartGame()
    messageCards.textContent += "-" + cards[2]


}

