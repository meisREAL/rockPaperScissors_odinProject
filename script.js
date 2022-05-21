function computerPlay() {
    let randomChoice = Math.floor((Math.random() * 3) + 1);

    if (randomChoice === 1) {
        computerChoice = "ROCK";
    } else if (randomChoice === 2) {
        computerChoice = "PAPER";
    } else if (randomChoice === 3) {
        computerChoice = "SCISSORS"
    }

    return computerChoice;
}

function playerSelection() {

    let playerChoice = "";

    while (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS") {
        playerChoice = prompt("Choose rock, paper or scissors").toUpperCase();
    }
    return playerChoice;
}