function computerPlay() {
    choices = ['Rock', 'Paper', 'Scissors']
    let random = choices[Math.floor(Math.random() * choices.length)]
    return random;
}