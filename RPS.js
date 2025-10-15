function getComputerChoice() {
    let choice =  (Math.random() * 3);
    
   if (choice < 1){
        return 'rock'
   } else if (choice < 2) {
        return 'paper'
    } else {
       return 'scissors'
   }
}

function getHumanChoice() {
    let choice = prompt('choose rock, paper, or scissors')
    return choice
}

function playRound(human, cpu) {
    if (human == 'paper' && cpu == 'scissor') {
        console.log("You lose! scissors beat paper")
        cpuScore++
    } else if (human == 'paper' && cpu == 'rock') {
        console.log("You win! paper beats rock")
        humanScore++
    } else if (human == 'rock' && cpu == 'paper') {
        console.log("You lose! paper beats rock")
        cpuScore++
    } else if (human == 'rock' && cpu == 'scissor') {
        console.log("You win! rock beats scissor")
        humanScore++
    } else if (human == 'scissor' && cpu == 'paper') {
        console.log("You win! scissors beat paper")
        humanScore++
    } else if (human == 'scissor' && cpu == 'rock') {
        console.log("You lose! rock beats scissor")
        cpuScore++
    } else {
        console.log("Its a tie!")
    }
}

let humanScore = 0
let cpuScore = 0

function playGame(choice) {
    const humanChoice = choice.toLowerCase()
    const cpuChoice = getComputerChoice()
    playRound(humanChoice,cpuChoice)


    if (humanScore > cpuScore) {
        console.log('Player wins!')
    } else if (cpuScore > humanScore) {
        console.log('CPU wins!')
    } else {
        console.log('Its a Tie!')
    }
}

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")

rock.addEventListener("click", () => {
    alert("rock")
})
paper.addEventListener("click", () => {
    alert("paper")
})
scissor.addEventListener("click", () => {
    alert("scissor")
})
