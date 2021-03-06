let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelector(".buttons")

const resultsDiv = document.querySelector(".results")

buttons.addEventListener("click", (e) => {
    if (playerScore === 5 || computerScore === 5) {
        alert('Game Over')
    } else {
        const result = document.createElement('h3')
        result.textContent = playRound(e.target.textContent, computerPlay());
        resultsDiv.appendChild(result)
        if (playerScore === 5) {
            alert('You Win')
        } else if (computerScore === 5) {
            alert('You lose')
        }
    }
})

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)

    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionLowerCase = playerSelection.toLowerCase()

    if (playerSelectionLowerCase === computerSelection) {
        return "Draw!!"
    }
    else if (playerSelectionLowerCase === 'rock' && computerSelection === 'scissors'
        || playerSelectionLowerCase === 'paper' && computerSelection === 'rock'
        || playerSelectionLowerCase === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return `You Win ${playerSelection} beats ${computerSelection}! Player Score = ${playerScore}. Computer Score = ${computerScore}`;
    }
    else if ((playerSelectionLowerCase === 'rock' && computerSelection === 'paper'
        || playerSelectionLowerCase === 'paper' && computerSelection === 'scissors'
        || playerSelectionLowerCase === 'scissors' && computerSelection === 'rock')) {
        computerScore++
        return `You Lose ${computerSelection} beats ${playerSelection}! Player Score = ${playerScore}. Computer Score = ${computerScore}`;
    }


}


