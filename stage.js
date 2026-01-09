const track = document.getElementById("track");
const images = document.querySelectorAll(".carousel-track img");

const imageWidth = 205; // foto + margin
let position = 0;

// max verschuiving zodat er altijd 3 zichtbaar blijven
const maxPosition = -(imageWidth * (images.length - 3));

function volgende() {
    if (position > maxPosition) {
        position -= imageWidth;
    } else {
        position = 0; // terug naar begin
    }
    track.style.transform = `translateX(${position}px)`;
}

function vorige() {
    if (position < 0) {
        position += imageWidth;
    } else {
        position = maxPosition; // naar einde
    }
    track.style.transform = `translateX(${position}px)`;
}
