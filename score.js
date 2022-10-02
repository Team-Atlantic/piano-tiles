import {score,prevScore,gameTime,updatePrevScore,resetScore} from "./gameData.js";
import { startGame } from "./index.js";


export function scoreCard(){
    let countScore = document.querySelector('.currentScore');
    setInterval(function(){
        countScore.innerText=score
    },gameTime)
}


const gameBoard =document.querySelector('.game-board'); 
const scoreBoard = document.querySelector('.score-screen');
export function gameOver(mygame){
    clearInterval(mygame);
    gameBoard.style.display='none';
    const showScoreHtml=`<section class="showScore">Score:<span class="currentScore">0</span></section>`;
    gameBoard.innerHTML=showScoreHtml;
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
document.querySelector('.showScore').style.display='revert';
// document.querySelector('.currentScore').innerText=score
scoreCard();
scoreBoard.style.display='none';
startGame();


});