let playerScore = 0, computerScore = 0;
let input;
//const buttons = document.querySelectorAll('.btn');

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', () => playerSelection('Rock'));
paperBtn.addEventListener('click', () => playerSelection('Paper'));
scissorsBtn.addEventListener('click', () => playerSelection('Scissors'));


function isRock(choice) {
    return choice.localeCompare('rock', undefined, { sensitivity: 'accent' }) === 0;
}
function isPaper(choice) {
    return choice.localeCompare('paper', undefined, { sensitivity: 'accent' }) === 0;
}
function isScissors(choice) {
    return choice.localeCompare('scissors', undefined, { sensitivity: 'accent' }) === 0;
}

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        default:
            return 'Scissors';
    }
}

// Replace text enter with user click...

function playerSelection(input) {
    // process click...
    let choice = String(input);
    if (isRock(choice))
        return 'Rock';
    else if (isPaper(choice))
        return 'Paper';
    else if (isScissors(choice))
        return 'Scissors';
    else
        return 0;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return 'It\'s a tie!';
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            computerScore++;
            return 'You lose! Paper beats rock.';
        }
        else {
            playerScore++;
            return 'You win! Rock beats scissors.';
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            computerScore++;
            return 'You lose! Scissors beats paper.';
        }
        else {
            playerScore++;
            return 'You win! Paper beats rock.';
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerScore++;
            return 'You lose! Rock beats scissors.';
        }
        else {
            playerScore++;
            return 'You win! Scissors beats paper.';
        }
    }
}

// Plays 5 rounds of Rock Paper Scissors against the computer
function game() {
    while (playerScore <= 5 || computerScore <= 5) {
        let playerChoice = playerSelection();

        // Infinite loop...
        while (playerChoice === 0) {
            alert('You done goofed!');
        }

        console.log(playRound(playerChoice, computerPlay()));
    }

    if (playerScore == 5)
        console.log('Congratulations! You are the winner!');
    else
        console.log('Try again! The computer won!');

}

game();
