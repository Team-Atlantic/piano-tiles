
import {score,keyMap,gameTime,updateScore} from './gameData.js'
import {gameOver} from "./score.js";

 
 
 export const gameBoard = document.querySelector(".game-board");
    
 export function startGame(){
  const mygame =  setInterval(function(){
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

function stopGame(){
  clearInterval(mygame);

}

function removeChild(sect){
  sect.remove();
}


function CheckBgcolor(event){
  let noOfClasses = event.target.classList;
  let tileColor = getComputedStyle(event.target).backgroundColor;
  if(tileColor==="rgb(0, 0, 0)" && !(noOfClasses.contains('counted'))){
    // score+=1;
    updateScore();

    // to mark that it should not be counted again.
    event.target.classList.add('counted');
    console.log('score',score)
  }
 

  else if (tileColor === "rgb(255, 255, 255)"){
    // alert("game over!")
    gameOver();
  }

}


 
  function generateRandomNum() {
    // generate a random number between 0 to 3
    return ((Math.random() * 10) | 0) % 4;
  }

  

