const songs = [
    "03 - My Only Love.mp3",
    "05 Moonlight Densetsu (Moon Lips).mp3",
    "07 - Carry On.mp3",
    "10 Eternal no Ai (M622, M602).mp3",
    "10 Princess no tameni... (For the Princess...).mp3",
    "12 - Power of Love.mp3",
    "12 Moon Cosmic Power Make Up (M305, M306, M308).mp3",
    "13 Epilogue (Moonlight Densetsu).mp3",
    "20 Hoshizora wa Mysterious - Part 6 (F11).mp3",
    "23 Hoshi-tachi ni Mamorarete (B4, B3B, B3, B2, B1).mp3"
]

//this is an ES6 function
//functionally the same as function name() { }
const createSongList = () => {
    //creates an organized list
    const list = document.createElement("ol")

    //finds all songs and lists them
    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement("li")
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item)
    }

    return list
}

document.getElementById("songList").appendChild(createSongList())

//when the user clicks on song title, it plays
//e stands for event
songList.onclick = (e) => {
    //console.log(e);
    const clickedItem = e.target
    const source = document.getElementById("source")
    source.src = "song/" + clickedItem.innerText
    //console.log(clickedItem.innerText)

    document.getElementById("currentlyPlaying").innerText = "Currently Playing: "
    document.getElementById("currentSong").innerText = clickedItem.innerText

    player.load()
    player.play()
}

//allows the play icon to be utilized
const playMusic = () => {
    if(player.readyState) {
    player.play()
    }
}

//allows the pause icon to be utilized
const pauseMusic = () => {
    player.pause()
}

const slider = document.getElementById("volumeSlider")
slider.oninput = (e) => {
    //console.log(e)
    const volume = e.target.value
    //console.log(volume)
    player.volume = volume
}

const updateProgress = () => {
    if(player.currentTime > 0) {
    const progressBar = document.getElementById("progress")
    //console.log(progressBar.value + " progress bar value")
    //console.log(player.currentTime + " player.currentTime")
    //console.log(player.duration + + " player.duration")

    progressBar.value = (player.currentTime / player.duration) * 100
    }
}