const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a number guessing game.
The function will take in an answer and a guess.
If the guess is bigger than the answer, you will say "Too Big!"
If the guess is smaller than the answer, you will say "Too Small!"
If the guess is the answer, you will say "You win!"

BONUS
if the guess is within a range of 10, aside from too big or too small, you will also say "Close!"
EG answer is 15, and the user guesses between 5-25 like 22 -> "Too Big!" "Close!"

if the guess is within a range of 5, instead of "Close!", it will say "Almost there!"

BONUS 2x DIFFICULTY
set the number of guesses allowed to a variable outside of the function
set the number of guesses made to a variable outside of the function starting it at 0
everytime the function runs add 1 to the number of guesses made

add one more if statement under the 2nd readline question
if(numberOfGuessesMade >= numberOfGuessesAllowed){
  console.log("You lose!");
  readline.close();
}

This means you can close the game with both "quit" and losing
*/

    /* planning and design */
    // The function will accept the person's guess as an argument.
    // The question should be "The number is between 1-100, guess the right number."
    // The number is 50.
    // people can guess five times
    //if is bigger than 60, show "Too Big!"
    //if is smaller than 40 , show "Too Small!"
    //if is 60-55, 40-45, show "Close!"
    //if is 55-51, 45-49, show "Almost there!"
    //if is 50, show "YOU WIN!"


//determine a proper parameter variable name


function GuessingGame(answer) {
  if (answer <= 40) {
    console.log("Too small!");
  } else if (answer >= 60) {
    console.log("Too big!");
  } else if (answer > 40 && answer <= 45) {
    console.log("Close!");
  } else if (answer > 55 && answer <= 60) {
    console.log("Close!");
  } else if (answer >= 51 && answer < 55) {
    console.log("Almost there!");
  } else if (answer > 45 && answer <= 49) {
    console.log("Almost there!");
  } else if (answer === 50) {
    console.log("You win!");
    readline.close(); // End the game if the guess is correct
    return;
  }
}

// Start the game
function StartGame() {
  readline.question("The number is between 1-100, guess the right number: ", (guess) => {
    if (guess === "quit") {
      readline.close(); // Close the game if the user types 'quit'
      return;
    }

    GuessingGame(Number(guess)); // Call the game function to handle the input

    StartGame();
  });
}

StartGame(); // Initiate the game

// looks good! 