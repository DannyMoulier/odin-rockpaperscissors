function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    }

    else if ((playerChoice === 'scissors' && computerChoice === 'paper')){
        return "player";
    }

    else if ((playerChoice === 'paper' && computerChoice === 'rock')){
        return "player";
    }

    else if ((playerChoice === 'rock' && computerChoice === 'scissors')){
        return "player";
    }

    else {
        return "computer";
    };

};

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++){
        let playerChoice = prompt('Rock, paper, or Scissors?').toLowerCase();
        console.log(`Your choice was: ${playerChoice}.`);
    
        let computerChoice = getComputerChoice();
        console.log(`Computer choice was: ${computerChoice}.`);
    
        let result = playRound(playerChoice, computerChoice);
        if (result === "player") {
            console.log(`${playerChoice} beats ${computerChoice}! you get a point!.`);
            playerScore ++
        }
        else if (result === "computer") {
            console.log(`${computerChoice} beats ${playerChoice}! computer gets a point!.`);
            computerScore ++
        }
        else {
            console.log(`${computerChoice} and ${playerChoice} is a tie!.`);
        };
        console.log(`compters score: ${computerScore}`);
        console.log(`your score: ${playerScore}`);
    };

    if (computerScore > playerScore) {
        return "game over! computer wins!";
    }

    else if (playerScore > computerScore) {
        return "game over! you win!";
    }

    else {
        return "its a tie";
    };
}

let resultOfGame = game();
console.log(resultOfGame);