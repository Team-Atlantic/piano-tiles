`use scrict`;
import {startGame} from "./index.js";

document.addEventListener("DOMContentLoaded", function () {
    const startButton=document.querySelector('.start-button');
    startButton.addEventListener('click',beginGame);
    console.log(startButton);

    function beginGame(){
        document.querySelector('.rule').style.display='none';
        document.querySelector('.game-board').style.display='grid';
        document.querySelector('.showScore').style.display='revert';
        startGame();

    }

});