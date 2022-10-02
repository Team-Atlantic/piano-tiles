import {score,prevScore,gameTime,updatePrevScore,resetScore} from "./gameData.js";
import { startGame } from "./index.js";

let countScore = document.querySelector('.currentScore');
setInterval(function(){
    countScore.innerText=score
},gameTime)
const gameBoard =document.querySelector('.game-board'); 
const scoreBoard = document.querySelector('.score-screen');
export function gameOver(){

    gameBoard.style.display='none';
    
    scoreBoard.style.display='revert';
    
    document.querySelector('.score span').innerText = score;
    document.querySelector('.best span').innerText =prevScore ;
    
}

// score-exit-btn

const playAgainBtn = document.querySelector('.score-again-btn');

playAgainBtn.addEventListener('click',function(){
updatePrevScore(score);
resetScore();
gameBoard.style.display='grid';
scoreBoard.style.display='none';
startGame();


});