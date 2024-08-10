const video = document.querySelector("#compilation");
const image = document.querySelector("#compilation-image");

function startPreview() {
    video.muted = true;
    video.currentTime = 1;
    video.playbackRate = 0.5;
    video.play();
}

function stopPreview() {
    video.currentTime = 0;
    video.playbackRate = 1;
    video.pause();
}

let previewTimeout = null;

image.addEventListener("mouseenter", () => {
    startPreview();
    previewTimeout = setTimeout(stopPreview, 4000);
});

image.addEventListener("mouseleave", () => {
    clearTimeout(previewTimeout);
    previewTimeout = null;
    stopPreview();
});