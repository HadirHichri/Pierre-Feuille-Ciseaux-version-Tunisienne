
let playerScore = 0;
let computerScore = 0;


const choices = ['rock', 'paper', 'scissors'];
const choiceMap = {
    'rock': 'حجرة 🪨',
    'paper': 'ورقة 📄',
    'scissors': 'مقص ✂️'
};

// --- HTML ---
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resultMessage = document.getElementById('resultMessage');
const matchInfo = document.getElementById('matchInfo');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetButton = document.getElementById('resetButton');




/**
 * 
 * @returns {string} - 'rock', 'paper', or 'scissors'.
 */
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'تعادل'; // Draw
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'تربح'; // Win
    } else {
        return 'خسارة'; // Loss
    }
}


function displayResult(result, playerChoice, computerChoice) {
    // 1. Scores
    if (result === 'ربح') {
        playerScore++;
        resultMessage.textContent = 'مبروك! ربحت ';
        resultMessage.className = 'win';
    } else if (result === ' خسارة') {
        computerScore++;
        resultMessage.textContent = 'ما ربحتش... جرب مرة أخرى.';
        resultMessage.className = 'loss';
    } else {
        resultMessage.textContent = 'تعادل! لا غالب لا مغلوب.';
        resultMessage.className = 'draw';
    }

   //choix
    matchInfo.textContent = `إختيارك: ${choiceMap[playerChoice]} ضد إختيار الكمبيوتر: ${choiceMap[computerChoice]}.`;

    // scores affiché
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
//jawla o5ra

function playRound(event) {
    const playerChoice = event.currentTarget.id; 
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    displayResult(result, playerChoice, computerChoice);
}

// Réinitialise le jeu
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    resultMessage.textContent = 'أعمل إختيارك بش تبدأ!';
    resultMessage.className = '';
    matchInfo.textContent = '';
}


// --- Écouteurs d'Événements ---


choiceButtons.forEach(button => {
    button.addEventListener('click', playRound);
});

//restart
resetButton.addEventListener('click', resetGame);

// Initialisation
document.addEventListener('DOMContentLoaded', resetGame);