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
    let choice = prompt('choose rock, paper, or scissor')
    return choice
}
console.log(getComputerChoice())
console.log(getHumanChoice());