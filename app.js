
function computerPlay() {
    choices = ['rock', 'paper', 'scissors']
    let random = choices[Math.floor(Math.random() * choices.length)]
    return random;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase()
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        return ('This is a tie');
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return ('Congrats you win!');
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return ('Too bad you lose!');
        //could've also done }else {console.log('You lose!')} instead of else if and recreating every scenario.
    } else {
        console.log('Something Went wrong')
    }

}

