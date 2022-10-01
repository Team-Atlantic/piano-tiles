`use scrict`;
document.addEventListener("DOMContentLoaded", function () {
  let activeTile = generateRandomNum();

  const gameTime = 1000;
 
  const keyMap = { 0: "A", 1: "S", 2: "D", 3: "F" };



  function setTile(prev, cur) {
    let row = document.querySelectorAll(".row");
    row[prev].style.backgroundColor = "";
  
    row[cur].innerText = keyMap[cur];
    row[cur].style.backgroundColor = "black";
  }

  function generateBoard() {
    let randomNum = generateRandomNum();
    setTile(activeTile, randomNum);
    activeTile = randomNum;
  }
  function generateRandomNum() {
    // generate a random number between 0 to 3
    return ((Math.random() * 10) | 0) % 4;
  }

  // setInterval(generateBoard, gameTime);
});
