import { mygame, startTheGame } from "./index.js";
export let score = 0;
export let prevScore = 0;
export let gameTime = 1000;

export const keyMap = { 0: "A", 1: "S", 2: "D", 3: "F" };

export const keyCodeMap = { 65: 0, 83: 1, 68: 2, 70: 3 };

const mediumLevel = 10;
export const mediumgameTime = 500;
export const easygameTime = 1000;

const hardLevel = 20;
export const hardgameTime = 400;

const levelTag = document.querySelector(".level");

export function updateScore() {
  score += 1;

  if (score > mediumLevel && score < hardLevel) {
    increaseSpeed(mediumLevel);
  } else if (score >= hardLevel) {
    increaseSpeed(hardLevel);
  }
}

function increaseSpeed(level) {
  if (level === mediumLevel) {
    setGameTime(mediumgameTime);
    levelTag.classList.remove("easy");
    levelTag.classList.add("medium");
    document.querySelector(".showScore").classList.add("flash");

    setTimeout(function () {
      document.querySelector(".showScore").classList.remove("flash");
    }, 1000);
    levelTag.textContent = "Medium";
  } else if (level == hardLevel) {
    setGameTime(hardgameTime);
    levelTag.classList.remove("medium");
    levelTag.classList.add("hard");
    levelTag.textContent = "Hard";

    document.querySelector(".showScore").classList.add("flash");
    setTimeout(function () {
      document.querySelector(".showScore").classList.remove("flash");
    }, 1000);
  }
  clearTimeout(mygame);
  setTimeout(startTheGame, gameTime);
}

export function setGameTime(time) {
  gameTime = time;
}
export function updatePrevScore(prev) {
  prevScore = Math.max(prev, prevScore);
}

export function resetScore() {
  score = 0;
}
