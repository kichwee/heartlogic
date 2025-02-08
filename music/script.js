const songsList = [
    {
        name: "Ocean Eyes",
        artist: "Billie Eilish",
        src: "assets/Billie Eilish - Ocean Eyes (Official Music Video).mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "Inauma",
        artist: "Bien",
        src: "assets/Bien - Inauma (Official Music Video).mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "When the party's over",
        artist: "Billie Eilish",
        src: "assets/Billie Eilish - when the party's over (Official Music Video).mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "Chord Overstreet",
        artist: "Alvin",
        src: "assets/Chord Overstreet - Hold On (Lyric Video).mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "Imposible",
        artist: "James Arthur",
        src: "assets/James Arthur - Impossible (Official Video).mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "Say you wont let go",
        artist: "James Arthur",
        src: "assets/James Arthur - Say You Won't Let Go.mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "Train Wreck",
        artist: "James Arthur",
        src: "assets/James Arthur - Train Wreck (Lyrics).mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "Colorado",
        artist: "Milky Chance",
        src: "assets/Milky Chance - Colorado (Official Video).mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "American",
        artist: "Qing Madi",
        src: "assets/Qing Madi - American Love (Lyrics).mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "BNXN",
        artist: "Qing Madi",
        src: "assets/Qing Madi, BNXN - Ole (Lyrics).mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "Dandelions",
        artist: "Qing Madi",
        src: "assets/Ruth B. - Dandelions (Lyrics).mp3",
        cover: "assets/1.jpg"
    }

   
];

const artistName = document.querySelector('.artist-name');
const musicName = document.querySelector('.song-name');
const fillBar = document.querySelector('.fill-bar');
const time = document.querySelector('.time');
const cover = document.getElementById('cover');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const prog = document.querySelector('.progress-bar');
const musicTilesContainer = document.querySelector('.music-tiles');

let song = new Audio();
let currentSong = 0;
let playing = false;

document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSong);
    displayMusicTiles();
    song.addEventListener('timeupdate', updateProgress);
    song.addEventListener('ended', nextSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    playBtn.addEventListener('click', togglePlayPause);
    prog.addEventListener('click', seek);
});

function loadSong(index) {
    const { name, artist, src, cover: thumb } = songsList[index];
    artistName.innerText = artist;
    musicName.innerText = name;
    song.src = src;
    cover.style.backgroundImage = `url(${thumb})`;
}

function updateProgress() {
    if (song.duration) {
        const pos = (song.currentTime / song.duration) * 100;
        fillBar.style.width = `${pos}%`;

        const duration = formatTime(song.duration);
        const currentTime = formatTime(song.currentTime);
        time.innerText = `${currentTime} - ${duration}`;
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function togglePlayPause() {
    if (playing) {
        song.pause();
    } else {
        song.play();
    }
    playing = !playing;
    playBtn.classList.toggle('fa-pause', playing);
    playBtn.classList.toggle('fa-play', !playing);
    cover.classList.toggle('active', playing);
}

function nextSong() {
    currentSong = (currentSong + 1) % songsList.length;
    playMusic();
}

function prevSong() {
    currentSong = (currentSong - 1 + songsList.length) % songsList.length;
    playMusic();
}

function playMusic() {
    loadSong(currentSong);
    song.play();
    playing = true;
    playBtn.classList.add('fa-pause');
    playBtn.classList.remove('fa-play');
    cover.classList.add('active');
}

function seek(e) {
    const pos = (e.offsetX / prog.clientWidth) * song.duration;
    song.currentTime = pos;
}

// Display music tiles
function displayMusicTiles() {
    musicTilesContainer.innerHTML = "";
    songsList.forEach((song, index) => {
        const tile = document.createElement('div');
        tile.classList.add('music-tile');
        tile.innerHTML = `
            <img src="${song.cover}" alt="${song.name}">
            <p>${song.name}</p>
            <p>${song.artist}</p>
        `;
        tile.addEventListener('click', () => {
            currentSong = index;
            playMusic();
        });
        musicTilesContainer.appendChild(tile);
    });
}
