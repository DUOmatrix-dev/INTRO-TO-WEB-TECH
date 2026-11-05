
// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Keep track of the number of guesses
let attempts = 0;

// This function checks the player's guess
function checkGuess() {

    // Get the number entered by the player
    let guess = Number(document.getElementById("guess").value);

    // Check that the player entered a valid number
    if (guess < 1 || guess > 100 || !Number.isInteger(guess)) {
        document.getElementById("message").innerHTML =
            "Please enter a whole number between 1 and 100.";
        return;
    }

    // Increase the attempt count
    attempts++;

    // Compare the guess with the secret number
    if (guess === secretNumber) {

        document.getElementById("message").innerHTML =
            "Congratulations! You guessed correctly!";

    }
    else if (guess < secretNumber) {

        document.getElementById("message").innerHTML =
            "Your guess is too low. Try again!";

    }
    else {

        document.getElementById("message").innerHTML =
            "Your guess is too high. Try again!";

    }

    // Display the number of attempts made
    document.getElementById("attempts").innerHTML =
        "Attempts: " + attempts;
}

// This function starts a new game
function restartGame() {

    // Generate another random number
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // Reset the number of attempts
    attempts = 0;

    // Clear the input field and reset the messages
    document.getElementById("guess").value = "";

    document.getElementById("message").innerHTML =
        "A new game has started. Good luck!";

    document.getElementById("attempts").innerHTML =
        "Attempts: 0";
}
