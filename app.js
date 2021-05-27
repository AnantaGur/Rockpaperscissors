
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
    } else {
        alert('That is not a valid choice.');
        userInput();
    }
    userInput();
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase()
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        return (`This is a tie the score is still ${playerScore} : ${computerScore}`);
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        ++playerScore
        if (playerScore == 5) {
            return ('You have won it all baby!');
        } return (`You win you\'re at ${playerScore} : ${computerScore}`)
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        ++computerScore
        if (computerScore == 5) {
            return ('Too bad you lose!');
        } return (`You lose you\'re at ${playerScore} : ${computerScore}`)
        //could've also done }else {console.log('You lose!')} instead of else if and recreating every scenario.
    } else {
        console.log('Something Went wrong')
    }
}



