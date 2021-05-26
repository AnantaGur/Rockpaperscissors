function computerPlay() {

    let random = Math.floor(Math.random() * 3 + 1);

    if (random === 1) {
        console.log('Rock');
    } else if (random === 2) {
        console.log('Paper');
    } else if (random === 3) {
        console.log('Scissors');
    }
};



