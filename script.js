function computerPlay() {
    let randomChoice = Math.floor((Math.random() * 3) + 1);

    if (randomChoice === 1) {
        Choice = "ROCK";
    } else if (randomChoice === 2) {
        Choice = "PAPER";
    } else if (randomChoice === 3) {
        Choice = "SCISSORS"
    }

    return Choice;
}

function playerSelection() {

    var Choice = "";

    while (Choice != "ROCK" && Choice != "PAPER" && Choice != "SCISSORS") {
        Choice = prompt("Choose rock, paper or scissors").toUpperCase();
    }
    return Choice;
}



function playRound() {
    computerChoice = computerPlay();
    playerChoice = playerSelection();

    if (computerChoice == "ROCK" && playerChoice == "SCISSORS") {
        winner = "Computer";
    } else if (computerChoice == "SCISSORS" && playerChoice == "PAPER") {
        winner = "Computer";
    } else if (computerChoice == "PAPER" && playerChoice == "ROCK") {
        winner = "Computer";
    } else if (computerChoice === playerChoice) {
        winner = "Tie";
    } else {
        winner = "Player"
    }
    return winner;
}

