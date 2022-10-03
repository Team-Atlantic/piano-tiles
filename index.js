import {
  score,
  keyMap,
  gameTime,
  updateScore,
  keyCodeMap,
} from "./gameData.js";
import { gameOver, scoreCard } from "./score.js";

import { playSuccessHit, playGameStart } from "./audio.js";
export const gameBoard = document.querySelector(".game-board");
export let mygame = null;

// It will set the initial board
export function setInitalState() {
  // update the score
  scoreCard();

  const allRows =
    '<section class="board-row"><p class="row"></p><p class="row"></p><p class="row"></p><p class="row"></p></section><section class="board-row"><p class="row"></p><p class="row"></p><p class="row"></p><p class="row"></p></section><section class="board-row "><p class="row"></p><p class="row"></p><p class="row"></p><p class="row"></p></section><section class="board-row start"><p class="row"></p><p class="row"></p><p class="row"></p><p class="row"></p></section>';

  // add all the rows to the gameboard.
  gameBoard.innerHTML = allRows;

  // set the last row on screen as yellow.
  const rows = document.querySelectorAll(".start .row");
  for (let row of rows) {
    row.style.backgroundColor = "yellow";
  }

  // select all the rows from the gameboard
  const boardRows = document.querySelectorAll(".board-row");

  // for the first three board rows set the black tile
  for (let i = 0; i < 3; i++) {
    const selectBoradRow = boardRows[i].querySelectorAll(".row");
    let ranNo = generateRandomNum();
    const blackTile = selectBoradRow[ranNo];
    blackTile.style.background = "black";
    blackTile.textContent = keyMap[ranNo];
    blackTile.classList.add("black-tile");

    // add start text for second last row and add event listener for this row.
    if (i == 2) {
      blackTile.innerHTML += "<br>Start";

      for (let curRow of selectBoradRow) {
        curRow.addEventListener("click", CheckBgcolor);
      }
    }
  }
  // start the game
  playGameStart();
  // start the game after a delay of 5 sec
  setTimeout(startTheGame, 500);
}

function startTheGame() {
  //delete the last row
  let boardRows = document.querySelectorAll(".board-row");

  let AllBoradRow = [...boardRows];

  let removeNode = AllBoradRow.pop();

  // to handle the last setTimeout when the board becomes empty.
  if (!removeNode) {
    return;
  }

  // check if we miss the black tile.
  let blackTile = removeNode.querySelector(".black-tile");
  if (blackTile) {
    let opacityofTile = getComputedStyle(blackTile).opacity;
    if (opacityofTile === "1") {
      gameOver(mygame);
      return;
    }
  }

  removeNode.remove();

  // set the event for second last row.
  let selectBoradRow = AllBoradRow.pop();

  selectBoradRow.classList.add("current");
  // console.log(selectBoradRow);

  for (let curRow of selectBoradRow.querySelectorAll(".row")) {
    curRow.addEventListener("click", CheckBgcolor);
  }

  // add the new element from the top.
  let sec = document.createElement("section");
  let ranNo = generateRandomNum();
  sec.className = "board-row";

  for (let i = 0; i <= 3; i++) {
    let para = document.createElement("p");
    para.className = "row";

    if (i === ranNo) {
      para.style.background = "black";
      para.textContent = keyMap[i];
      para.classList.add("black-tile");
    }
    sec.appendChild(para);
  }

  gameBoard.prepend(sec);

  mygame = setTimeout(startTheGame, gameTime);
}

document.addEventListener("keydown", checkPressedKey);

function checkPressedKey(event) {
  let currentRow = document.querySelector(".current");
  if (currentRow) {
    let currentBlackTile = currentRow.querySelector(".black-tile");
    let allChild = currentRow.querySelectorAll(".row");

    let pressedKey = event.key.toUpperCase();

    if (
      pressedKey === currentBlackTile.textContent[0] &&
      !currentBlackTile.classList.contains("counted")
    ) {
      // score+=1;
      updateScore();

      //audio when score updates
      playSuccessHit();

      // to mark that it should not be counted again. and change its opacity.
      currentBlackTile.classList.add("counted");

      currentRow.classList.remove("current");
    } else {
      let wrongSelection = allChild[keyCodeMap[event.keyCode]];
      wrongSelection.style.backgroundColor = "red";
      wrongSelection.style.transition = "0.5s ease-in";
      setTimeout(gameOver, 500, mygame);
    }
  }
}

// update the score if we click on black tile otherwise game over.
function CheckBgcolor(event) {
  console.log("click here");
  let noOfClasses = event.target.classList;
  let tileColor = getComputedStyle(event.target).backgroundColor;
  if (tileColor === "rgb(0, 0, 0)" && !noOfClasses.contains("counted")) {
    // score+=1;
    updateScore();

    //audio when score updates
    playSuccessHit();

    // to mark that it should not be counted again. and change its opacity.
    event.target.classList.add("counted");
  } else if (!noOfClasses.contains("counted")) {
    // when we click on white tile -- > game is over.
    event.target.style.backgroundColor = "red";
    event.target.style.transition = "0.5s ease-in";
    setTimeout(gameOver, 500, mygame);
  }
  event.target.parentElement.classList.remove("current");
}

function generateRandomNum() {
  // generate a random number between 0 to 3
  return ((Math.random() * 10) | 0) % 4;
}
