export let score=0;
export let prevScore = 0;
export const gameTime = 1000;

export const keyMap = { 0: "A", 1: "S", 2: "D", 3: "F" };


export function updateScore(){
    score +=1;
}

export function updatePrevScore(prev){

    prevScore = Math.max(prev,prevScore);

}

export function resetScore(){
    score = 0;
}