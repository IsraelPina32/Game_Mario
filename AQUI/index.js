function back() {
  location.href = "http://127.0.0.1:5501/AQUI/login.html"
}
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
audioGameOver = new Audio('./musica/audio_gameover.mp3')
const jump = () =>{
  mario.classList.add('jump');

  setTimeout(() =>{
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
   
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
      
        pipe.style.animation = 'none';
      
        pipe.style.left = `${pipePosition}px`;
       
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        audioGameOver.play();
        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        document.getElementById("star").style.color = "gold";
        document.getElementById("star").innerHTML = "<strong>GAMER OVER<strong>";
       

        clearInterval(loop);
    }
    
   
;
}, 10);

function stopAudio(){
  audioGameOver.pause();
}setTimeout(stopAudio, 8000)

document.addEventListener('keydown', jump);



