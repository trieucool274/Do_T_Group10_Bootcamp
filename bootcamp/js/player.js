var player = document.getElementById("mainVideo");

function playPause() {
    if (player.paused)
        player.play();
    else
        player.pause();
}

function stopVideo() {
    player.pause();
    if (player.currentTime) {
        player.currentTime = 0;
    }
}

function increaseVolume() {
    if (player.volume < 1)
        player.volume = parseFloat(player.volume + 0.1).toFixed(1);
}

function decreaseVolume() {
    if (player.volume > 0)
        player.volume = parseFloat(player.volume - 0.1).toFixed(1);
}

function muteVolume() {
    if (player.muted)
        player.muted = false;
    else
        player.muted = true;
}
