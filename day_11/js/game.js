var PlayerOneChoice = "Rock";
var PlayerTwoChoice = "scissors";

if (PlayerOneChoice === PlayerTwoChoice) {
    console.log("It's a tie!");
} 
else if ((PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") || (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper")) {
    if (PlayerOneChoice === "Paper") {
        console.log("Player One wins! Paper beats Rock.");
    } else {
        console.log("Player Two wins! Paper beats Rock.");
    }
} 
else if ((PlayerOneChoice === "Rock" && PlayerTwoChoice === "scissors") || (PlayerOneChoice === "scissors" && PlayerTwoChoice === "Rock")) {
    if (PlayerOneChoice === "Rock") {
        console.log("Player One wins! Rock beats scissors.");
    } else {
        console.log("Player Two wins! Rock beats scissors.");
    }
} 
else if ((PlayerOneChoice === "scissors" && PlayerTwoChoice === "Paper") || (PlayerOneChoice === "Paper" && PlayerTwoChoice === "scissors")) {
    if (PlayerOneChoice === "scissors") {
        console.log("Player One wins! scissors beats Paper.");
    } else {
        console.log("Player Two wins! scissors beats Paper.");
    }
} 
else {
    console.log("Invalid input! Please choose 'Rock', 'Paper', or 'scissors'.");
}