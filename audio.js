
const startBtn = document.querySelector('.start-button');
startBtn.addEventListener('click',function(){
 
  let music = document.querySelector('#loop_game_music');
  music.play();

});

export function playGameStart() {
  let playAudio = document.createElement("audio");
  playAudio.src = "audio/get-ready.wav";
  playAudio.play();
}

export function playSuccessHit() {
  let playAudio = document.createElement("audio");
  playAudio.src = "audio/success-hit.wav";
  playAudio.play();
}

export function playGameOver() {
  let playAudio = document.createElement("audio");
  playAudio.src = "audio/gameover.mp3";
  playAudio.play();
}
