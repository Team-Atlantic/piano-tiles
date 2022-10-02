`use scrict`;
import {startGame} from "./index.js";

document.addEventListener("DOMContentLoaded", function () {
    const startButton=document.querySelector('.start-button');
    startButton.addEventListener('click',beginGame);


    // It will be called when we click start on rules div
    function beginGame(){
        document.querySelector('.rule').style.display='none';
        document.querySelector('.game-board').style.display='grid';
        document.querySelector('.showScore').style.display='revert';
        startGame();

    }

});