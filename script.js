// Create the “Hangman” game. Your game will run in the console.
// You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.

// Prompt player 1 for a word
let word = prompt("Player 1, please enter a word (word must have a minimum of 8 letters) : ")

// Check if the word has at least 8 letters
while (word.length < 8) {
    word = prompt("Please enter a word that has at least 8 letters : ")
}

function hangmanGame(word) {
    // Convert the word to lowercase
    word = word.toLowerCase()
    // Initialize the word with all asterisks
    let wordLetters = Array(word.length).fill("*")
    // Initialize a list to store the incorrect guesses
    let incorrectGuesses = []
    // Initialize a counter for the number of incorrect guesses
    let incorrectGuessesCounter = 0

    while (true) {
        // Print the current state of the word
        console.log(`Current word: ${wordLetters.join("")}`)
        // Print the list of incorrect guesses
        console.log(`Incorrect guesses: ${incorrectGuesses.join(", ")}`)
    
        // Prompt the user for a letter
        let guess = prompt("Guess a letter of the word chosen by player 1: ").toLowerCase()
    
        // Check if the guess is a single letter
        if (guess.length !== 1) {
            console.log("Please enter only one letter.")
            continue
        } else if (!/[a-z]/.test(guess)) { // Check if the guess is a letter
            console.log("Please enter a letter.")
            continue
        } else if (incorrectGuesses.includes(guess) || wordLetters.includes(guess)) { // Check if the guess has already been made
            console.log("You've already guessed that letter.")
            continue
        }

        // Check if the guess is in the word
        if (word.includes(guess)) {
            // Replace the asterisks with the correct letter
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    wordLetters[i] = guess
                }
            }
            // Check if the word has been completely guessed
            if (!wordLetters.includes("*")) {
                console.log("CONGRATS YOU WIN! The word was:", word)
                break
            }
        } else {
            // Increment the incorrect guesses counter
            incorrectGuessesCounter += 1
            // Add the incorrect guess to the list
            incorrectGuesses.push(guess)
            // If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE
            if (incorrectGuessesCounter === 10) {
                console.log("You lost! The word was:", word)
                break
            }
        }
    }
}

// Call the function to start the game
hangmanGame(word)
  