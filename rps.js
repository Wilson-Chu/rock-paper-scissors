let playerScore = 0, computerScore = 0;

const container = document.querySelector('body');
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.compScore');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => playerSelection('Rock'));
paperBtn.addEventListener('click', () => playerSelection('Paper'));
scissorsBtn.addEventListener('click', () => playerSelection('Scissors'));

const pScoring = document.createElement('div');
pScoring.classList.add('div');
pScoring.textContent = playerScore;
pScore.appendChild(pScoring);

const cScoring = document.createElement('div');
cScoring.classList.add('div');
cScoring.textContent = computerScore;
cScore.appendChild(cScoring);

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

function playerSelection(input) {
    let result = playRound(input, computerPlay());
    const announce = document.createElement('p');
    announce.classList.add('p');
    announce.textContent = result;
    announce.style.fontFamily = 'Comic Sans';
    announce.style.color = '#5381ed';
    container.appendChild(announce);

    if (playerScore === 5) {
        alert('Congratulations! You are the winner!');
        //Stop the game or offer restart here...
    }
    else if (computerScore === 5) {
        alert('Try again! The computer won!');
        // ...
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return 'It\'s a tie!';
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            computerScore++;
            cScoring.textContent = computerScore;
            cScore.replaceChild(cScoring, cScoring);
            return 'You lose! Paper beats rock.';
        }
        else {
            playerScore++;
            pScoring.textContent = playerScore;
            pScore.replaceChild(pScoring, pScoring);
            return 'You win! Rock beats scissors.';
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            computerScore++;
            cScoring.textContent = computerScore;
            cScore.replaceChild(cScoring, cScoring);
            return 'You lose! Scissors beats paper.';
        }
        else {
            playerScore++;
            pScoring.textContent = playerScore;
            pScore.replaceChild(pScoring, pScoring);
            return 'You win! Paper beats rock.';
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerScore++;
            cScoring.textContent = computerScore;
            cScore.replaceChild(cScoring, cScoring);
            return 'You lose! Rock beats scissors.';
        }
        else {
            playerScore++;
            pScoring.textContent = playerScore;
            pScore.replaceChild(pScoring, pScoring);
            return 'You win! Scissors beats paper.';
        }
    }
}