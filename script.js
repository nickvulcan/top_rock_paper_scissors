function game() {

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber == 0) {
        return "Rock";
    } else if (randomNumber == 1) {
        return "Paper";
    }
    else{
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection){
    let roundResult;
        switch (playerSelection) {
            case "Rock": {
                switch (computerSelection){
                    case "Rock": {
                        roundResult = "Draw! Both players chose " + playerSelection;
                    break;
                    }
                    case "Paper": {
                        roundResult = "You lose! " + computerSelection + " beats " + playerSelection;
                        break;
                    }
                    default: {
                        roundResult = "You win! " + playerSelection + " beats " + computerSelection;
                        break;
                    }
                }
                break;
            }

            case "Paper": {
                switch (computerSelection){
                    case "Rock": {
                        roundResult = "You win! " + playerSelection + " beats " + computerSelection;
                    break;
                    }
                    case "Paper": {
                        roundResult = "Draw! Both players chose " + playerSelection;
                        break;
                    }
                    default: {
                        roundResult = "You lose! " + computerSelection + " beats " + playerSelection;
                        break;
                   }
                }
                break;
        }
            default:
                switch (computerSelection){
                    case "Rock": {
                        roundResult = "You lose! " + computerSelection + " beats " + playerSelection;
                    break;
                    }
                    case "Paper": {
                        roundResult = "You win! " + playerSelection + " beats " + computerSelection;
                        break;
                    }
                    default: {
                        roundResult = "Draw! Both players chose " + playerSelection;
                        break;
                    }
            }
        }
        
    return roundResult;
}

const computerSelection = getComputerChoice();
let playerSelection;
while (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors')  {
    playerSelection = prompt("Choose Rock, paper, or scissors.");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().substring(1,playerSelection.length);
}
console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
    game();
 }

//  number = Number(prompt("enter a number"));