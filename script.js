// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero.`


// For restarting the game
let restartGame = true;

// for storing the range of the number to be guessed
let rangeNum;

// For storing the Number that the user will guess
let randomNum;

// For storing the number of attempts the user has left
let attempts;

// For storing the user's guess
let guess;

// For storing the user's response to play again or not play aggain
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "Ok" to start the game`);

// Game restarts as long as restartGame has a value of true
while (restartGame) {
    // Asks user to enter a number to set the upper bound for the random number that will be created
    rangeNum = prompt(`Please enter a maximum number for the range`);

    // using parseInt to attempt to convert the user's response into a number value
    rangeNum = parseInt(rangeNum);

    // Varifies the user's entry for a range number is a number great than zero (NOTE: All numbers, positive or negative, have a default boolean value of true, except for zero which as a boolean value of false. Also, NaN has a default boolean value of false)

    while (!rangeNum || rangeNum < 1){
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // Create the random number using the range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // Prompts user to enter a number of attempts allowed (AKA number of guesses)
    attempts = parseInt (prompt(`Please enter a number of attempts allowed:`));

    // Verifying the user's entry for a number of attempts allowed is a number greater than zero and equal to or less than range they set
    while(!attempts || attempts < 1 || attempts > rangeNum){
        attempts = parseInt (prompt(`Please enter a number from 1 to to ${rangeNum}`));
    }

    // Asks user to enter a guess in the range they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left.`);

    // Continues looping until the user guesses the correct number or runs out of attempts (Note: Loops until a break keyword is run)
    while (true){
        // Displays the number when a code word is entered
        if (guess === `Mellon`){
            alert(`The number is ${randomNum}`);
            // Prompts the user to enter another guess
            guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);
        }

        // Tries to convert the user's guess into a number
        guess = parseInt(guess);
    
        // Verify the user's guess is a number greater than zero and less than or equal to the range they set
        while (!guess || guess < 1 || guess > rangeNum){
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
        }

        // Removes an attempt (De-incrementation)
        attempts--;

        // Checks if user guessed correctly. If so, then the game ends
        if (guess === randomNum){
            alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
            break;

            // Checks if user has any attempts left. If not- the game ends and the number is displayed to the user.
        } else if (attempts === 0) {
            alert(`Sorry you have run out of attempts! The number was ${randomNum}!`);
            break;

            // Checks if user's guess was too low and prompts user to guess again if so
        }   else if (guess < randomNum){
            guess = prompt(`Too low. You have ${attempts} attempt(s) remaining.`);

            // the only other possibility is the user's guess was too high so the user is prompted again
        } else {
            guess = prompt(`Too high. You have ${attempts} attempt(s) remaining.`)
        }
    }

    // Prompts user with option to play again
    playAgain = prompt(`Would you like to play again? Y for yes. N for no.`)

    // Loop continues until valid response is given
    while (true){
        // check if user's answer is no (AKA 'N' or 'n')
        if (playAgain.toUpperCase() === `N`){
            // Alerts the user that the game is over and the game does NOT restart
            alert(`Thanks for playing!`);
            restartGame = false;
            break;
            // Checks if user's answer is yes (AKA 'y' or 'Y')
        } else if (playAgain.toUpperCase() === `Y`){
            // The game restarts
            break;
        } else{
            playAgain = prompt(`Please enter Y or N.`);
        }
    }
};