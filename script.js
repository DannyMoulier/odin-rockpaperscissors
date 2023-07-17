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


function playGame(playerChoice, computerChoice) {
    let computerScore = 0;
    let playerScore = 0;

    // let playerChoice = prompt('Rock, paper, or Scissors?').toLowerCase();
    // for (let i = 0; i <= 5; i++){
    while (computerScore < 5 && playerScore < 5){


        console.log(`Your choice was: ${playerChoice}.`);
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
            return "tie"
        };
        console.log(`compters score: ${computerScore}`);
        console.log(`your score: ${playerScore}`);

        }


    if (computerScore > playerScore) {
        return "game over! computer wins!";
    }

    else if (playerScore > computerScore) {
        return "game over! you win!";
    }

    else {
        return "its a tie";
    };

};



// let resultOfGame = game();
// console.log(resultOfGame);



// const resultContainer = document.querySelector('#results-container');
// const result = document.createElement('p');
// const gameStatus = document.createElement('p');

// resultContainer.append(gameStatus);
// resultContainer.append(result);


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        playerChoice = e.target.innerText;
        computerChoice = getComputerChoice();
        return playRound(playerChoice, computerChoice);
    })}
);











// console.log(playerChoice);


// console.log(buttons)

// console.log(results)
