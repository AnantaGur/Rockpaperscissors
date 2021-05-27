function computerPlay() {
    choices = ['Rock', 'Paper', 'Scissors']
    let random = choices[Math.floor(Math.random() * choices.length)]
    return random;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()

    if (playerSelection == computerSelection) {
        return ('This is a tie');
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        return ('Congrats you win!');
    } else if ((playerSelection == 'Rock' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
        return ('Too bad you lose!');
    } else {
        console.log('Something Went wrong')
    }
}

