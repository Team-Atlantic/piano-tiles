`use scrict`;
document.addEventListener("DOMContentLoaded", function () {
  let score=0;
  
  const gameTime = 1000;
 
  const keyMap = { 0: "A", 1: "S", 2: "D", 3: "F" };
  
  const gameBoard = document.querySelector(".game-board");
  function startGame(){
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
          para.textContent = keyMap[i];
        }else{
          para.style.background="white"
        }
        sec.appendChild(para);
      }
      gameBoard.appendChild(sec);
      setInterval(removeChild,gameTime*4,sec);
    },gameTime)
  }

function removeChild(sect){
  sect.remove();
}


function CheckBgcolor(event){
  let noOfClasses = event.target.classList;
  let tileColor = getComputedStyle(event.target).backgroundColor;
  if(tileColor==="rgb(0, 0, 0)" && !(noOfClasses.contains('counted'))){
    score+=1;
    // to mark that it should not be counted again.
    event.target.classList.add('counted');
    console.log('score',score)
  }
 

  else if (tileColor === "rgb(255, 255, 255)"){
    alert("game over!")
  }

}


 
  function generateRandomNum() {
    // generate a random number between 0 to 3
    return ((Math.random() * 10) | 0) % 4;
  }

  
});
