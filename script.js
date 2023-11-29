const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const blankSpace = {
    songName: 'Blank Space',
    artist: 'Taylor Swift',
    file: 'blank_space'
};

const youreLosingMe = {
    songName: 'You\'re Losing Me',
    artist: 'Taylor Swift',
    file: 'youre_losing_me'
};

let isPlaying = false;
const playlist = [blankSpace, youreLosingMe];
let index = 0;

function playSong() {
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong() {
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false
}

function playPauseDecider() {
    if (isPlaying === true) {
        pauseSong();
    }
    else {
        playSong();
    }
}

function loadSong() {
    cover.src = `img/${playlist[index].file}.png`;
    song.src = `songs/${playlist[index].file}.mpeg`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

function previousSong() {
    if (index === 0) {
        index = playlist.length - 1;
    }
    else {
        index -= 1;
    }
    loadSong();
    playSong();
}

function nextSong() {
    if (index === playlist.length - 1) {
        index = 0;
    }
    else {
        index += 1;
    }
    loadSong();
    playSong();    
}

loadSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);