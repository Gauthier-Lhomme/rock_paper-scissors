const computerChoice = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1 // Le résultat sera 1, 2 ou 3
}