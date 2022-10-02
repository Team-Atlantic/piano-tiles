import {score,gameTime} from "./index.js";

let countScore = document.querySelector('.currentScore')
// se
setInterval(function(){
    countScore.innerText=score
},gameTime)