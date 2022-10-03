`use scrict`;
import { setInitalState } from "./index.js";

setTimeout(function () {
  document.querySelector(".rule").style.top = "50%";
}, 1000);
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector(".start-button");
  startButton.addEventListener("click", beginGame);

  // It will be called when we click start on rules div
  function beginGame() {
    document.querySelector(".rule").style.display = "none";
    document.querySelector(".game-board").style.display = "grid";
    document.querySelector(".showScore").style.display = "revert";
    document.querySelector("footer").style.display="none";
    
    setInitalState();
  }
});
