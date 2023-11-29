const songName = document.getElementById('song-name');
const song = document.getElementById('audio');
const play = document.getElementById('play');

songName.innerText = 'Blank Space';

function playSong(){
    song.play();
}

play.addEventListener('click', playSong);
