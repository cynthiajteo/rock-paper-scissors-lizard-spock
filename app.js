const readline = require('readline-sync');

// create base play for futher extension
class Player {
    constructor() {
        this.choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }
}

class Human extends Player {
    constructor() {
        super();
    }

    // ask player for choice
    askInput() {
        return readline.question(
            'make your move: rock, paper, scissors, lizard, spock \nyou choose: ',
        );
    }

    // check that player's input in valid
    checkInput(playerInput) {
        return !this.choices.includes(playerInput);
    }
}

class Computer extends Player {
    constructor() {
        super();
    }

    // randomize move
    randomMove() {
        let choice =
            this.choices[Math.floor(Math.random() * this.choices.length)];
        console.log('computer chose: ' + choice);
        return choice;
    }
}

class Game {
    constructor() {
        // this.players = [];
    }

    // ask player for 'player vs com' or 'com vs com' mode
    askMode() {
        return readline.question('choose player or computer: ');
    }

    // switch case to check for winning combination
    checkWin(input1, input2) {
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
            case 'spocklizard':
                console.log('---------------------------------------');
                console.log(`${input2} beats ${input1}, player 2 wins!`);
                break;

            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
            case 'lizardlizard':
            case 'spockspock':
                console.log('---------------------------------------');
                console.log(`${input1} and ${input2}, it's a draw!`);
                break;
        }
    }

    play() {
        console.log("let's play rock, paper, scissors, lizard, spock!");
        let player = this.askMode().toLowerCase();

        // player vs computer mode
        if (player === 'player') {
            let human = new Human();
            let computer = new Computer();
            let input1 = human.askInput().toLowerCase();
            if (human.checkInput(input1)) {
                console.log('your input is invalid, please try again');
                console.log('run node app to restart');
                process.exit();
            } else {
                let input2 = computer.randomMove();
                this.checkWin(input1, input2);
                console.log('run node app to play again');
                process.exit();
            }
        }
        // computer vs computer
        else if (player === 'computer') {
            let computer1 = new Computer();
            let computer2 = new Computer();
            let input1 = computer1.randomMove();
            let input2 = computer2.randomMove();
            this.checkWin(input1, input2);
            console.log('run node app to play again');
            process.exit();
        }
        // if invalid input, exit game
        else {
            console.log('your input is invalid, please try again');
            console.log('run node app to restart');
            process.exit();
        }
    }
}

// declare new game
const game = new Game();

// start game
game.play();
