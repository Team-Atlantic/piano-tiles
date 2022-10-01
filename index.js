`use scrict`;
document.addEventListener("DOMContentLoaded", function () {
  let score=0;
  let activeTile = generateRandomNum();

  const gameTime = 2000;
 
  const keyMap = { 0: "A", 1: "S", 2: "D", 3: "F" };
  
  const gameBoard = document.querySelector(".game-board");
  setInterval(function(){
    let sec=document.createElement("section");
    let ranNo=generateRandomNum();
    sec.className="board-row";
    for(let i=0;i<=3;i++){
      let para=document.createElement("p");
      para.className="row";
      para.addEventListener('click',CheckBgcolor);
      if(i===ranNo){
        para.style.background="black"
      }else{
        para.style.background="white"
      }
      sec.appendChild(para);
    }
    gameBoard.appendChild(sec);
    setInterval(removeChild,gameTime*4,sec);
  },gameTime)


 
function removeChild(sect){
  sect.remove();
}


function CheckBgcolor(event){
  // console.log('event',event)
  console.log(getComputedStyle(event.target).backgroundColor)
  if(getComputedStyle(event.target).backgroundColor==="rgb(0, 0, 0)"){
    score+=1
    console.log('score',score)
  }else{
    alert("game over!")
  }

}

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
