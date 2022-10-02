import {
  score,
  prevScore,
  gameTime,
  updatePrevScore,
  resetScore,
} from "./gameData.js";
import { startGame } from "./index.js";
import { playGameOver } from "./audio.js";

// update the span currentScore with the score value.
export function scoreCard() {
  let countScore = document.querySelector(".currentScore");
  setInterval(function () {
    countScore.innerText = score;
  }, gameTime);
}

const gameBoard = document.querySelector(".game-board");
const scoreBoard = document.querySelector(".score-screen");

// It will be called when the game is over.
export function gameOver(mygame) {
  playGameOver();
  clearInterval(mygame);
  gameBoard.style.display = "none";
  const showScoreHtml = `<section class="showScore">Score:<span class="currentScore">0</span></section>`;
  gameBoard.innerHTML = showScoreHtml;
  scoreBoard.style.display = "revert";
  updatePrevScore(score);
  document.querySelector(".score span").innerText = score;
  document.querySelector(".best span").innerText = prevScore;
}

// score-exit-btn
const exitBtn = document.querySelector(".score-exit-btn");
exitBtn.addEventListener("click", function () {
  document.querySelector(".rule").style.display = "revert";
  document.querySelector(".score-screen").style.display = "none";
});

const playAgainBtn = document.querySelector(".score-again-btn");

// It will be called when we click play again.
playAgainBtn.addEventListener("click", function () {
  resetScore();
  gameBoard.style.display = "grid";
  document.querySelector(".showScore").style.display = "revert";
  scoreCard();
  scoreBoard.style.display = "none";
  startGame();
});
