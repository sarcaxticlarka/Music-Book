 
var arr = [
    { songName: "Pasoori", url: "./songs/Pasoori.mp3", img: "./images/passori.jpg" ,banner: "./images/pasooribanner.png" },
    { songName: "O Maahi", url: "./songs/O Maahi.mp3", img: "./images/O_Maahi.jpg" ,banner: "./images/omaahiBanner.png" },
    { songName: "Apna Bana Le", url: "./songs/Apna Bana Le.mp3", img: "./images/apnaBnaLe.jpg",banner: "./images/ApnbanaleBanner.png" },
    { songName: "Heeriye", url: "./songs/Heeriye.mp3", img: "./images/Heeriye.jpg",banner: "./images/heeriyeBanners.png" },
    { songName: "Chaleya", url: "./songs/Chaleya.mp3", img: "./images/Chaleya.jpg" ,banner: "./images/chaleyaBanner.png" },
    { songName: "Phir se Ud Chala", url: "./songs/Phir Se Ud Chala.mp3", img: "./images/phir_se_udd_chala.jpg" ,banner: "./images/phirseBanner.png" },
    { songName: "Matak Chalungi", url: "./songs/Matak Chalungi.mp3", img: "./images/MatakChalungi.jpg",banner: "./images/matakChalungiiBanner.png" },
]

var allSongs = document.querySelector(".all-songs")
var poster = document.querySelector(".image-card")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")
var audio = new Audio()
var selectedSong = 0

function mainFunction() {
    var clutter = ""
    arr.forEach(function (elem, idx) {
        clutter += `<div class="song-card" id=${idx}>
    <div class="part1">
        <img src="${elem.img}" alt="">
        <h3>${elem.songName}</h3>
    </div>
    <h6 id="duration${idx}">0:00</h6>
</div>`
    })
    allSongs.innerHTML = clutter

    arr.forEach(function (elem, idx) {
        var tempAudio = new Audio(elem.url)
        tempAudio.addEventListener("loadedmetadata", function() {
            var duration = tempAudio.duration
            var minutes = Math.floor(duration / 60)
            var seconds = Math.floor(duration % 60)
            var formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
            document.getElementById(`duration${idx}`).innerText = formattedDuration
        })
    })

    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].banner})`
}

mainFunction()

allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    play.innerHTML = `<i class="ri-pause-line"></i>`
    flag = 1
    mainFunction()
    audio.play()
})

var flag = 0
play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-line"></i>`
        mainFunction()
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }

})

forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++
        mainFunction()
        audio.play()
    } else {
        forward.style.opacity = 0.3
    }
})

backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--
        mainFunction()
        audio.play()
    } else {
        backward.style.opacity = 0.3
    }
})