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

function game() {
    var computerWin = 0;
    var playerWin = 0;
    for (let i = 0; i < 5; i++) {
        let winner = playRound();
        console.log("Game " + (1 + i));
        if (winner == "Computer") {
            computerWin++;
            console.log("Computer won this round");
        } else if (winner == "Player") {
            console.log("You won this round");
            playerWin++;
        } else {
            console.log("This was a tie!")
        }
    }
    console.log("Computer won: " + computerWin + " games of 5");
    console.log("Player won: " + playerWin + " games of 5");
}

