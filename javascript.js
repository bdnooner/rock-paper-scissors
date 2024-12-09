function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();

  if (choice != "rock" && choice != "paper" && choice != "scissors") {
    console.log(
      "There was an issue with your choice, randomly assigning for you..."
    );

    return (rand = Math.floor(Math.random() * 3) + 1);
  }

  switch (choice) {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
      return 3;
  }
}

function playGame() {
  function playRound(human, computer) {
    let result = human - computer;

    switch (result) {
      case -2:
        console.log("You win!");
        humanScore += 1;
        break;
      case -1:
        console.log("You lose...");
        compScore += 1;
        break;
      case 0:
        console.log("It was a tie.");
        break;
      case 1:
        console.log("You win!");
        humanScore += 1;
        break;
      case 2:
        console.log("You lose...");
        compScore += 1;
        break;
    }
  }

  let humanScore = 0;
  let compScore = 0;

  for (let i = 0; i < 5; i++) {
    let comp = getComputerChoice();
    let human = getHumanChoice();

    console.log(`Round ${i + 1}`);
    playRound(human, comp);
  }
  console.log(`Final Score:\nYou: ${humanScore}\nComputer: ${compScore}`);

  if (humanScore > compScore) {
    console.log("You win!");
  } else if (compScore > humanScore) {
    console.log("You lose...");
  } else {
    console.log("It was a tie.");
  }
}
