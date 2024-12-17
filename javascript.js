function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function playRound(human, computer) {
  function getChoiceText(choice) {
    switch(choice) {
      case 1: 
        return "Rock";
      case 2: 
        return "Paper";
      case 3: 
        return "Scissors";
    }
  }
  let humanChoice = getChoiceText(human);
  let computerChoice = getChoiceText(computer);
  let result = human - computer;

  p_human.textContent = `You: ${humanChoice}`;
  p_comp.textContent = `Computer: ${computerChoice}`;
  results.appendChild(p_human);
  results.appendChild(p_comp);

  switch (result) {
    case -2:
      console.log("You win!");
      humanScore += 1;
      p_results.textContent = `You win!`;
      p_score.textContent = `Current score: You - ${humanScore}       Computer - ${compScore}`
      results.appendChild(p_results);
      results.appendChild(p_score);
      break;
    case -1:
      console.log("You lose...");
      compScore += 1;
      p_results.textContent = `You lose...`;
      p_score.textContent = `Current score: You - ${humanScore}       Computer - ${compScore}`
      results.appendChild(p_results);
      results.appendChild(p_score);
      break;
    case 0:
      console.log("It was a tie.");
      p_results.textContent = `It was a tie.`;
      p_score.textContent = `Current score: You - ${humanScore}       Computer - ${compScore}`
      results.appendChild(p_results);
      results.appendChild(p_score);
      break;
    case 1:
      console.log("You win!");
      humanScore += 1;
      p_results.textContent = `You win!`;
      p_score.textContent = `Current score: You - ${humanScore}       Computer - ${compScore}`
      results.appendChild(p_results);
      results.appendChild(p_score);
      break;
    case 2:
      console.log("You lose...");
      compScore += 1;
      p_results.textContent = `You lose...`;
      p_score.textContent = `Current score: You - ${humanScore}       Computer - ${compScore}`
      results.appendChild(p_results);
      results.appendChild(p_score);
      break;
  }

  if(humanScore === 5 || compScore === 5) {
    if(humanScore > compScore){
      p_final.textContent = `YOU WIN!`;
      results.appendChild(p_final);
    } else {
      p_final.textContent = `YOU LOSE...`;
      results.appendChild(p_final);
    }
    humanScore = 0;
    compScore = 0;
  }
}

let humanScore = 0;
let compScore = 0;

const results = document.querySelector(".results");
const p_human =  document.createElement("p");
const p_comp =  document.createElement("p");
const p_results =  document.createElement("p");
const p_score =  document.createElement("p");
const p_final =  document.createElement("p");

//set human choice to button clicked
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.id) {
      case "rock":
        humanChoice = 1;
        break;
      case "paper":
        humanChoice = 2;
        break;
      case "scissors":
        humanChoice = 3;
        break;
    }
    playRound(humanChoice, getComputerChoice());
    console.log("Human Choice: " + humanChoice);
    console.log(btn.id);
  });
});
