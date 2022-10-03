import {mygame,startTheGame} from './index.js';
export let score=0;
export let prevScore = 0;
export let gameTime = 1000;

export const keyMap = { 0: "A", 1: "S", 2: "D", 3: "F" };

export const keyCodeMap ={65:0,83:1,68:2,70:3};

const mediumLevel = 10;
export const mediumgameTime = 700;
export const easygameTime = 1000;
export function updateScore(){
    score +=1;

    if (score>mediumLevel){
        increaseSpeed(mediumLevel);
    }
   
}

function increaseSpeed(level){
    if (level === mediumLevel){

        setGameTime(mediumgameTime);
        clearTimeout(mygame);
    }
setTimeout(startTheGame,gameTime);
}


export function setGameTime(time){
    gameTime = time
}
export function updatePrevScore(prev){

    prevScore = Math.max(prev,prevScore);

}

export function resetScore(){
    score = 0;
}