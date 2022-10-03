import {
  score,
  prevScore,
  gameTime,
  updatePrevScore,
  resetScore,
} from "./gameData.js";
import { setInitalState } from "./index.js";
import { playGameOver } from "./audio.js";

let scoreTimer = null;
let countScore = document.querySelector(".currentScore");
// update the span currentScore with the score value.
export function scoreCard() {
  countScore.innerText = score;
  scoreTimer = setTimeout(scoreCard, gameTime);
}

const gameBoard = document.querySelector(".game-board");
const scoreBoard = document.querySelector(".score-screen");
const showScore = document.querySelector(".showScore");

// It will be called when the game is over.
export function gameOver(mygame) {
  playGameOver();
  // clearInterval(mygame);
  // stop adding or deleting rows in game board.
  clearTimeout(mygame);
  //stop updating score
  clearTimeout(scoreTimer);
  gameBoard.style.display = "none";
  // const showScoreHtml = `<section class="showScore">Score:<span class="currentScore">0</span></section>`;
  // gameBoard.innerHTML = showScoreHtml;
  gameBoard.innerHTML = "";
  scoreBoard.style.display = "revert";
  showScore.style.display ="none";
  updatePrevScore(score);
  document.querySelector(".score span").innerText = score;
  document.querySelector(".best span").innerText = prevScore;

  resetScore();
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
  
  gameBoard.style.display = "grid";
  document.querySelector(".showScore").style.display = "revert";

  // scoreCard();
  scoreBoard.style.display = "none";
  showScore.style.display = "revert";
  // startGame();
  setInitalState();
});
