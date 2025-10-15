function getComputerChoice() {
    let choice =  (Math.random() * 3);
    
    if (choice < 1){
        return 'rock'
    } else if (choice < 2) {
        return 'paper'
    } else {
        return 'scissor'
    }
}

function playRound(human, cpu) {
    if (human == 'paper' && cpu == 'scissor') {
        out.textContent = "You lose! scissors beat paper"
        cpuScore++
    } else if (human == 'paper' && cpu == 'rock') {
        out.textContent = "You win! paper beats rock"
        humanScore++
    } else if (human == 'rock' && cpu == 'paper') {
        out.textContent = "You lose! paper beats rock"
        cpuScore++
    } else if (human == 'rock' && cpu == 'scissor') {
        out.textContent = "You win! rock beats scissor"
        humanScore++
    } else if (human == 'scissor' && cpu == 'paper') {
        out.textContent = "You win! scissors beat paper"
        humanScore++
    } else if (human == 'scissor' && cpu == 'rock') {
        out.textContent  = "You lose! rock beats scissor"
        cpuScore++
    } else {
        out.textContent = "Its a tie!"
    }

    score.textContent = `Player: ${humanScore} | CPU: ${cpuScore}`

    if (humanScore === 5 || cpuScore === 5){
        if (humanScore > cpuScore) {
            out.textContent = 'Player wins!'
        } else {
            out.textContent = 'CPU wins!'
        }  
    } 
}

let humanScore = 0
let cpuScore = 0

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const out = document.getElementById("result")
const score = document.getElementById("score")

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
})
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
})
scissor.addEventListener("click", () => {
    playRound("scissor", getComputerChoice())
})

