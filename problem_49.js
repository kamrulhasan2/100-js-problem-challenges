//? Q:49. Write a function that implements the game of Rock, Paper, Scissors.

//* Constraints:
//? The function should take the player's choice as an argument.
//? The computer's choice should be random.
//? The function should return the result of the game (win, lose, or draw).


// const playRPS = (playerChoice) => {};
// console.log(playRPS("rock")); // Output: "You win!", "You lose!", or "It's a draw!"


// My solution
const playRPS = (playerChoice) => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoice) {
        return `It's a draw! You both chose ${playerChoice}`;
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }

    return `You lose! ${computerChoice} beats ${playerChoice}`;
};

console.log(playRPS("rock"));
console.log(playRPS("paper"));
console.log(playRPS("scissors"));

// Explain the game logic
// Rock beats Scissors
// Scissors beat Paper
// Paper beats Rock
// If both choices are the same, it's a draw
// If player wins, return "You win! {playerChoice} beats {computerChoice}"
// If computer wins, return "You lose! {computerChoice} beats {playerChoice}"
// Example outputs:
// playRPS("rock") => "You win! rock beats scissors" (if computer chose scissors)
// playRPS("paper") => "You lose! scissors beats paper" (if computer chose scissors)
// playRPS("scissors") => "It's a draw! You both chose scissors" (if computer chose scissors)