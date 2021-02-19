document.addEventListener('DOMContentLoaded', function () {

    let playButton = document.querySelector('.play-button');

    let video = document.querySelector('video');

    console.log(playButton);
    let videoPlay = false;

    const playVideo = () => {
        video.play();
        playButton.style.display = "none";
        videoPlay = true;
    }

    const pauseVideo = () => {
        video.pause();
        playButton.style.display = "block";
        videoPlay = false;
    }

    if (videoPlay) {
        video.addEventListener('click', pauseVideo);
        video.removeEventListener('click', playVideo);
    } else {
        video.addEventListener('click', playVideo);
        playButton.addEventListener("click", playVideo);
        video.removeEventListener('click', pauseVideo);
    }


})