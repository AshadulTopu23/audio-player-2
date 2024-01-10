
// all variables
let topuPlayer = document.querySelectorAll('.topu-player');
let thumbCover = document.querySelectorAll('.thumb-cover');
let trackName = document.querySelectorAll('.track-name');
let playlistName = document.querySelectorAll('.playlist-name');
let albumName = document.querySelectorAll('.album-name');
let singerName = document.querySelectorAll('.singer-name');
let progressBar = document.querySelectorAll('.progress-bar');
let progressBarFill = document.querySelectorAll('.bar-fill');
let currentTime = document.querySelectorAll('.current-time');
let durationTime = document.querySelectorAll('.duration-time');
let resetAudio = document.querySelectorAll('.reset-audio');
let prevAudio = document.querySelectorAll('.prev-audio');
let backwardAudio = document.querySelectorAll('.backward-audio');
let playPause = document.querySelectorAll('.playPause-audio');
let forwardAudio = document.querySelectorAll('.forward-audio');
let nextAudio = document.querySelectorAll('.next-audio');
let toggleVolume = document.querySelectorAll('.toggle-volume');
let volumeControl = document.querySelectorAll('.volume-control');
let audioSetting = document.querySelectorAll('.audio-setting');
let addPlaylist = document.querySelectorAll('.add-playlist');
let reportAudio = document.querySelectorAll('.report-audio');
let shareAudio = document.querySelectorAll('.share-audio');
let audioSettingClose = document.querySelectorAll('.audio-setting-close');
let audioPanel = document.querySelectorAll('audio-panel')



audioPanel.crossOrigin = "anonymous";

// // Audio source
// // Create audio context
// // let audioCtx = new AudioContext() || new webkitAudioContext(); -- for safari
// let audioCtx = new AudioContext();

// // Create audio node so that the analyser can work with
// let source = audioCtx.createMediaElementSource(audioPanel);

// // Create analyser
// let analyser = audioCtx.createAnalyser();

// // Make 2d context
// let ctx = canvas.getContext("2d");

// // Make connections
// source.connect(analyser);
// source.connect(audioCtx.destination);

// // analyser.fftSize = 2048;
// analyser.smoothingTimeConstant = 0.6;
// analyser.fftSize = 512;

// // Buffer length
// let bufferLength = analyser.frequencyBinCount;
// let data = new Uint8Array(bufferLength);




// audio lists
let songs = [
    {
        "track": "Topu Special",
        "playlist": "Episode 09",
        "singer": "Topu",
        "album": "Horror Developer",
        "thumb": "assets/img/o1.jpg",
        "cover": "",
        "path": "assets/audio/01.pm3"
    },
    {
        "track": "Topu Special",
        "playlist": "Episode 10",
        "singer": "Topu",
        "album": "Horror Developer",
        "thumb": "assets/img/o2.jpg",
        "cover": "",
        "path": "assets/audio/02.pm3"
    }
]

// initial play
let songCounter = 1;
let maxSongs = songs.length;
singerName.innerText = `ashadul`;

console.log(singerName);

const loadSong = (songCounter) => {
    audioPanel[0].src = `${songs[songCounter].path}`;
    thumbCover[0].src = `${songs[songCounter].thumb}`;
    trackName[0].innerText = `${songs[songCounter].track}`
    playlistName[0].innerText = `${songs[songCounter].playlist}`
    albumName.innerText = `${songs[songCounter].album}`
    singerName.innerText = `${songs[songCounter].singer}`
    // trackName.innerText = `${songs[songCounter].track}`
    console.log('load song called', songCounter);

}
loadSong(songCounter);

// audio play pause
const togglePlay = (audio) => {

    // playPause.forEach((btn) => {

    // })
}
let x = 0;

// console.log(playPause);
playPause.forEach((btn) => {
    // console.log(btn);
    // let play = btn.querySelector('.play')
    // console.log(play);
    // play.classList.remove('show')
    // play.classList.add('hide')
    btn.addEventListener('click', () => {
        if (x === 0) {
            x++;
            btn.querySelector('.play').classList.remove('show')
            btn.querySelector('.play').classList.add('hide')
            btn.querySelector('.pause').classList.remove('hide')
            btn.querySelector('.pause').classList.add('show')
        } else {
            x--;
            btn.querySelector('.play').classList.add('show')
            btn.querySelector('.play').classList.remove('hide')
            btn.querySelector('.pause').classList.add('hide')
            btn.querySelector('.pause').classList.remove('show')
        }
    })

})
// playPause.addEventListener('click', () => {
//     playPause.querySelector('play').removeClassList('show').addClassList('hide')
// })