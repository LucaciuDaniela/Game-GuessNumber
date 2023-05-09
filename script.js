"use strict";

function randomNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

let secretNumber = randomNumber();

let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function displayScore() {
  document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //Cand nu exista un numar
  if (!guess) {
    displayMessage("No number!");
  }
  //Cand am ghicit numarul
  else if (guess === secretNumber) {
    displayMessage("Corect Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //Cand numarul ghicit este diferit de nr secret
  else if (guess !== secretNumber) {
    //Cand numarul ghicit este prea mare
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      score--;
      displayScore();
    } else {
      displayMessage("You lost!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = randomNumber();
  score = 20;
  displayScore();
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "bisque";
  document.querySelector(".number").style.width = "15rem";
});
