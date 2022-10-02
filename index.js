import { score, keyMap, gameTime, updateScore } from "./gameData.js";
import { gameOver, scoreCard } from "./score.js";


import { playSuccessHit, playGameStart } from "./audio.js";
export const gameBoard = document.querySelector(".game-board");
let mygame = null;

// called when we click on start on rules div
export function startGame() {

  playGameStart();

  scoreCard();
  mygame = setInterval(function () {
    let sec = document.createElement("section");
    let ranNo = generateRandomNum();
    sec.className = "board-row";

    for (let i = 0; i <= 3; i++) {
      let para = document.createElement("p");
      para.className = "row";
      para.addEventListener("click", CheckBgcolor);

      if (i === ranNo) {
        para.style.background = "black";
        para.textContent = keyMap[i];
        para.classList.add("black-tile");
      } else {
        para.style.background = "white";
      }
      sec.appendChild(para);
    }

    gameBoard.appendChild(sec);
    sec.focus();
    console.log(sec);
    // event for keyboard
    document.addEventListener("keydown", function (event) {
      let keyval = event.key;
      let blackTile = sec.querySelector(".black-tile");

      console.log(gameBoard.activeElement);
     
      console.log(keyval, blackTile.textContent.toLowerCase());
      
      // && !blackTile.classList.contains("counted")
      if (keyval=== blackTile.textContent.toLowerCase()) {
        updateScore();
        // to mark that it should not be counted again.
        blackTile.classList.add("counted");
      // } else {
      //   // .style.backgroundColor = "red";
      //   // .style.transition = "0.5s ease-in";
      //   setTimeout(gameOver, 500, mygame);
      }
    });
    setInterval(removeChild, gameTime * 4, sec);
  }, gameTime);
}

// used for removing child from gameboard. If you miss the black tile --> game over.
function removeChild(sect) {
  let blackTile = sect.querySelector(".black-tile");
  let opacityofTile = getComputedStyle(blackTile).opacity;
  if (opacityofTile === "1") {
    gameOver(mygame);
  }
  sect.remove();
}

// update the score if we click on black tile otherwise game over.
function CheckBgcolor(event) {
  let noOfClasses = event.target.classList;
  let tileColor = getComputedStyle(event.target).backgroundColor;
  if (tileColor === "rgb(0, 0, 0)" && !noOfClasses.contains("counted")) {
    // score+=1;
    updateScore();


    //audio when score updates
    playSuccessHit();

    // to mark that it should not be counted again.
    event.target.classList.add("counted");
  } else if (tileColor === "rgb(255, 255, 255)") {
    // when we click on white tile -- > game is over.
    event.target.style.backgroundColor = "red";
    event.target.style.transition = "0.5s ease-in";
    setTimeout(gameOver, 500, mygame);
  }
}

function generateRandomNum() {
  // generate a random number between 0 to 3
  return ((Math.random() * 10) | 0) % 4;
}
