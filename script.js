buttons = document.querySelectorAll("button");

buttons.forEach( (button) => {
    button.addEventListener("click", 
        () => {
            message.textContent = playRound(button.id, getComputerChoice());
            
            if (humanScore == 5 || computerScore == 5) {
                winner = document.createElement("p");
                winner.textContent = humanScore == 5 ? "You win!" : "Computer wins!";    
                results.appendChild(winner);

                reload = document.createElement("p");
                reload.textContent = "Reload page to play again!";
                results.appendChild(reload); 
            }

            humanScoreLabel.textContent = "You: " + humanScore;
            computerScoreLabel.textContent = "Computer: " + computerScore;
        });
    });


results = document.querySelector("#results");

message = document.createElement("p");
message.textContent = "Welcome to Rock, Paper Scissors! Click a button above to begin!"
humanScoreLabel = document.createElement("p");
humanScoreLabel.textContent = "You: 0"
computerScoreLabel = document.createElement("p");
computerScoreLabel.textContent = "Computer: 0"


results.appendChild(message);
results.appendChild(humanScoreLabel);
results.appendChild(computerScoreLabel);


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




