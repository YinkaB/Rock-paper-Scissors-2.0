const options = document.querySelectorAll(".options"); //declaring all options
let pScore = 0; //setting the final score values to 0
let cScore = 0; // setting the final score values to 0

 //usning a for each to loop with an add event listener listening to each click and updating the values
options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.value;

    const cOptions = ["Rock", "Paper", "Scissors"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];
    
    updateMoves(pInput, cInput);
    compareInputs(pInput, cInput);
    updateScore();
    if(checkWinner()){
      pScore = cScore= 0;
      updateScore();
    }
  });
});

function updateMoves(pInput, cInput){
  document.querySelector("#p-move").src = `./assets/${pInput}.svg`;
  document.querySelector("#c-move").src = `./assets/${cInput}.svg`;
}

//function for comparing inputs
function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;
  if (pInput === cInput) {
    alert(`${currentMatch} is a Tie`);
    return;
  }
  //check for rock
  if (pInput === "Rock") {
    if (cInput === "Scissors") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
  //Check for Paper
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
  //Check for Scissors
  else {
    if (cInput === "Paper") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
}
//updating score 
function updateScore() {
  document.querySelector("#p-score").textContent = pScore;
  document.querySelector("#c-score").textContent = cScore;
}
    //checks for the winner
function checkWinner() {
  if (pScore === 5 || cScore === 5) {
    const winner =
      pScore === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert(winner);
    return true;
  }
  return false;
}