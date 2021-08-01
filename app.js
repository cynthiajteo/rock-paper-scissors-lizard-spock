const readline = require('readline-sync');

// timer
const timer = () => {
    console.log('you have played for an hour, enough for the day');
    console.log('goodbye');
    process.exit();
};

// declare all options
const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// computer's random move
const randomMove = () => {
    let choice = options[Math.floor(Math.random() * options.length)];
    console.log('computer chose: ' + choice);
    return choice;
};

// choose player or computer
const askPlayer = () => {
    return readline.question('choose player or computer: ');
};

// ask for player's move
const askPlayerInput = () => {
    return readline.question(
        'make your move: rock, paper, scissors, lizard, spock: ',
    );
};

// check if player input is valid
const checkInput = (playerInput) => {
    return !options.includes(playerInput);
};

// check win using switch case
const checkWin = (input1, input2) => {
    switch (input1 + input2) {
        case 'rocklizard':
        case 'rockscissors':
        case 'paperrock':
        case 'paperspock':
        case 'scissorspaper':
        case 'scissorslizard':
        case 'lizardspock':
        case 'lizardpaper':
        case 'spockrock':
        case 'spockscissors':
            console.log('---------------------------------------');
            // console.log(`player 1 chose ${input1}`);
            // console.log(`player 2 chose ${input2}`);
            console.log(`${input1} beats ${input2}, player 1 wins!`);
            break;

        case 'rockspock':
        case 'rockpaper':
        case 'paperlizard':
        case 'paperscissors':
        case 'scissorsrock':
        case 'scissorsspock':
        case 'lizardrock':
        case 'lizardscissors':
        case 'spockpaper':
        case 'spockizard':
            console.log('---------------------------------------');
            // console.log(`player 1 chose ${input1}`);
            // console.log(`player 2 chose ${input2}`);
            console.log(`${input2} beats ${input1}, player 2 wins!`);
            break;

        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        case 'lizardlizard':
        case 'spockspock':
            console.log('---------------------------------------');
            // console.log(`player 1 chose ${input1}`);
            // console.log(`player 2 chose ${input2}`);
            console.log(`${input1} and ${input2}, it's a draw!`);
            break;
    }
};

// game play
const startGame = () => {
    console.log("let's play rock, paper, scissors, lizard, spock!");
    setTimeout(timer, 3600000);

    let player = askPlayer().toLowerCase();

    if (player === 'player') {
        let input1 = askPlayerInput().toLowerCase();

        if (checkInput(input1)) {
            console.log('your input is invalid, please try again');
            console.log('run node app to restart');
            process.exit();
        } else {
            let input2 = randomMove();
            checkWin(input1, input2);
            console.log('run node app to play again');
            process.exit();
        }
    } else if (player === 'computer') {
        let input1 = randomMove();
        let input2 = randomMove();
        checkWin(input1, input2);
        console.log('run node app to play again');
        process.exit();
    } else {
        console.log('your input is invalid, please try again');
        console.log('run node app to restart');
        process.exit();
    }
};

// to start game
startGame();
module.exports = options;
