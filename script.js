function getComputerChoice() {
  const randomNumber = Math.round(Math.random());
  if (randomNumber >= 0 && randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  let choice = prompt("Which one choice from rock,paper,scissor?");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It's draw");
    return;
  }

  if (humanChoice == "rock" && computerChoice == "scissor") {
    return "win";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    return "lose";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return "win";
  } else if (humanChoice == "paper" && computerChoice == "scissor") {
    return "lose";
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    return "win";
  } else if (humanChoice == "scissor" && computerChoice == "rock") {
    return "lost";
  } else {
    console.log("Invalid input");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log(`---Round ${i + 1} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    if (result == "win") {
      humanScore++;
    }
    if (result == "lose") {
      computerScore++;
    }
  }
  console.log(
    `Final Score -> You :  ${humanScore}, Computer : ${computerScore}`,
  );
  if (humanScore > computerScore) {
    console.log("Your are the overall winner!");
  } else if (humanScore < computerScore) {
    console.log("Computer win the huma!");
  } else {
    console.log("It's tie!");
  }
}
playGame();
