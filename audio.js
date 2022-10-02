// window.document.onload = function () {
//   console.log("loop music");
//   document.getElementById("loop_game_music").play();
// };

// export { playGameStart, playSuccessHit, playGameOver };

window.addEventListener("load", (event) => {
  setTimeout(function () {
    console.log("page is fully loaded");
    const media = document.getElementById("loop_game_music");
    media.muted = true;
    media.play();
  }, 1000);
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
