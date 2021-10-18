'use strict'
// number is the random generated number in range 1 to 20
let number = Math.trunc(Math.random() * 20) +1;
// score is the score of the player in the game
let score = 20;
// highScore is the highest score in the games
let highScore = document.querySelector('.highscore').textContent;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

const checkMyNumber = function(){
    // guess is the number which is guessed by player.
    const guess = Number(document.querySelector('.guess').value);
    

    //check whether the player has entered the Guess number or not. 
    if (!guess) {
        displayMessage('📌No number');

    //Check if the predicted number is EQUAL to the random number.
    } else if (guess === number){
        // when predicted number is equal to the random number, the message will display "Correct number!"
        // backgroud color is turned into to green
        // display the generated number with bigger size 
        displayMessage('🎉 Correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        // if current score is higher than previous score, update the highScore equal the current score
        if (score > highScore){
            highScore = score;
        }
        // display the highest score.
        document.querySelector('.highscore').textContent = highScore;
    //Check if the predicted number is  NOT equal to the random number.
    }else if (number !== guess){     
        if(score > 1){
            // if guess number is not correct, current score is minus 1.
            score--;
            // if the guess number is larger than the generated number, display message "Too High", otherwise.
            displayMessage((guess > number ? "📈 Too High" : "📉 Too Low"));
            // display the current score.
            document.querySelector('.score').textContent = score;
        // if score < 1, the player will be lost. Display message "You lost the game"
        }else{
            displayMessage("💥You lost the game");
            document.querySelector('.score').textContent = 0;
        }
        // guessing wrong background will be turned into red background
        document.querySelector('body').style.backgroundColor = '#D70040';
    } 
}
// check the guessed number when player click on the CHECK button
document.querySelector('.check').addEventListener('click', checkMyNumber);
//check the guessed number when player enter the ENTER button
document.addEventListener('keydown', function(e){
    if (e.key === "Enter"){
        checkMyNumber();
    } 
});

// When player click the AGAIN button, score will be reset to 0 and generate a different number. 
// Reset message to "Start guessing...", hidden the generated number by "?", set backgroundColor to black,
// allow to enter another guessing number
document.querySelector('.again').addEventListener('click', function (){
    score = 20; 
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});