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

function playGame(e) {
    while (playerScore < 5 && computerScore < 5) {
        const playerChoice = e.target.alt;
        const computerChoice = getComputerChoice();

        console.log(`Round ${rounds}`);

        const playerChoiceIcon = document.createElement("img");
        playerChoiceIcon.src = `./icons/${playerChoice}.png`;
        const computerChoiceIcon = document.createElement("img");
        computerChoiceIcon.src = `./icons/${computerChoice}.png`;

        playerChoiceIcon.style.width = "50px";
        playerChoiceIcon.style.height = "50px";

        computerChoiceIcon.style.width = "50px";
        computerChoiceIcon.style.height = "50px";

        playerChoiceLine.innerText = '';
        playerChoiceLine.appendChild(playerChoiceIcon);
        computerChoiceLine.innerText = '';
        computerChoiceLine.appendChild(computerChoiceIcon);

        if (computerChoiceIcon) {
            console.log("element exists")
        }


        const result = playRound(playerChoice, computerChoice);

        if (result === "player") {
            secondaryInfo.innerText = `${playerChoice} beats ${computerChoice}`;
            playerScore ++
        }
        else if (result === "computer") {
            secondaryInfo.innerText = `${computerChoice} beats ${playerChoice}`
            computerScore ++
        }
        else {
            secondaryInfo.innerText = `${computerChoice} ties with ${playerChoice}`
        };

        playerScoreLine.innerText = `Your Score: ${playerScore}`;
        computerScoreLine.innerText = `Computer Score: ${computerScore}`;

        rounds ++
        
        if (playerScore === 5 || computerScore === 5) {
            if (computerScore > playerScore) {
                finalResult.innerText = "game over! computer wins! refresh to play again";
            }
        
            else if (playerScore > computerScore) {
                finalResult.innerText = "game over! you win! refresh to play again";
            }
        
            else {
                finalResult.innerText = "its a tie. refresh to play again";
            };
        }
        return;
    }
};

const buttons = document.querySelectorAll('button');
const mainInfo = document.querySelector('#main-info');
const secondaryInfo = document.querySelector('#secondary-info');
const gameInfoContainer = document.querySelectorAll('#game-info-container');
const computerScoreLine = document.querySelector('#computer-score-text');
const playerScoreLine = document.querySelector('#player-score-text');
const playerChoiceLine = document.querySelector('#player-choice');
const computerChoiceLine = document.querySelector('#computer-choice');
const finalResult = document.querySelector('#final-result');



let rounds = 1
let playerScore = 0
let computerScore = 0


buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        playGame(e)
    })}
);
