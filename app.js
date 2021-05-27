
function computerPlay() {
    choices = ['rock', 'paper', 'scissors']
    let random = choices[Math.floor(Math.random() * choices.length)]
    return random;
}

let playerScore = 0;
let computerScore = 0;
computerSelection = computerPlay().toLowerCase;

userInput();

function userInput() {
    playerSelection = prompt('Rock, Paper, or Scissors?', '');
    if ((playerSelection.toLowerCase() == 'rock') ||
        (playerSelection.toLowerCase() == 'paper') ||
        (playerSelection.toLowerCase() == 'scissors')) {
        console.log(playRound(playerSelection, computerSelection));
    } else if (playRound()) {
        alert('That is not a valid choice.');
        userInput();
    }
    userInput();
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase()
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        alert(`This is a tie the score is still ${playerScore} : ${computerScore}`);
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        ++playerScore
        alert(`You win you\'re at ${playerScore} : ${computerScore}`)
        if (playerScore == 5) {
            alert('You have won it all baby!');
        }
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        //could've also done }else {console.log('You lose!')} instead of else if and recreating every scenario.
        ++computerScore
        alert(`You lose you\'re at ${playerScore} : ${computerScore}`)
        if (computerScore == 5) {
            alert('Too bad you lose!');
        }
    } else {
        console.log('Something Went wrong')
    }
}



