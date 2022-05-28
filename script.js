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
    if (btnRock) {
        Choice = "ROCK";
    } else if (btnPaper) {
        Choice = "PAPER";
    } else if (btnScissors) {
        Choice = "SCISSORS"
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
    const container = document.querySelector('#announcing');
    let computerScore = document.querySelector(".computer");
    let playerScore = document.querySelector(".player");
    let tieScore = document.querySelector(".tie")

    var computerWin;
    var playerWin;
    var tie;

    let winner = playRound();

    if (winner == "Computer") {
        computerWin = Number(computerScore.innerHTML);
        computerWin++;
        container.innerHTML = 'Computer won this round';
        computerScore.innerHTML = computerWin;
        return computerWin;
    } else if (winner == "Player") {
        playerWin = Number(playerScore.innerHTML);
        container.innerHTML = 'You won this round';
        playerWin++;
        playerScore.innerHTML = playerWin;
        return playerWin;
    } else {
        container.innerHTML = 'This was a tie';
        tie = Number(tieScore.innerHTML);
        tie++;
        tieScore.innerHTML = tie;
    }

}

function gameOver() {
    let computerWin, playerWin = game();
    if (computerWin == 5 || playerWin == 5) {
        if (computerWin == 5) {
            alert('Computer won 5 games, please refresh the page');
        } else if (playerWin == 5) {
            alert('you won 5 games, please refresh the page')
        }
    }
}


const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors')

btnRock.addEventListener('click', gameOver)
btnPaper.addEventListener('click', gameOver)
btnScissors.addEventListener('click', gameOver)


