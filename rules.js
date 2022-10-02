`use scrict`;
document.addEventListener("DOMContentLoaded", function () {
    let buttons=document.querySelector('.start-button')
    buttons.addEventListener('click',gameBoard)

    function gameBoard(){
        document.querySelector('.rule').style.display='none';
        // console.log()
        document.querySelector('.game-board').style.display='grid';

    }

});