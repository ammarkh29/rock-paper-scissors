function getComputerChoice() {
    choice = Math.random();
    if (choice < 0.33) {
        return "rock";
    }
    else if (choice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}



function playGame() {  
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice == "rock") {
            if (computerChoice == "scissors") {
                humanScore++;
                return "You win! Rock beats scissors.";
            } else if (computerChoice == humanChoice) {
                return "Tie!";
            } else {
                computerScore++;
                return "You lose! Paper beats rock.";
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                humanScore++;
                return "You win! Paper beats rock.";
            } else if (computerChoice == humanChoice) {
                return "Tie!";
            } else {
                computerScore++;
                return "You lose! Scissors beats paper.";
            }
        } else { // humanChoice must be scissors
            if (computerChoice == "paper") {
                humanScore++;
                return "You win! Scissors beats paper.";
            } else if (computerChoice == humanChoice) {
                return "Tie!";
            } else {
                computerScore++;
                return "You lose! Rock beats scissors.";
            }
        }
    }

    for (let index = 0; index < 5; index++) {
        humanChoice = prompt("Choose rock, paper, or scissors: ")
        console.log(playRound(humanChoice, getComputerChoice()));
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (humanScore == computerScore) {
        console.log("Tie");
    }
    else {
        console.log("Computer wins!");
    }
}



