function setupCarousel(trackId) {
    const track = document.getElementById(trackId);
    const carousel = track.parentElement;
    const images = track.querySelectorAll("img");

    const imageWidth = images[0].offsetWidth + 5;
    const visibleImages = Math.floor(carousel.offsetWidth / imageWidth);

    let position = 0;
    const maxPosition = -(imageWidth * (images.length - visibleImages));


    return {
        volgende() {
            console.log(position > maxPosition);
            if (position > maxPosition) {
                position -= imageWidth;
            } else {
                position = 0;
            }
            track.style.transform = `translateX(${position}px)`;
        },
        vorige() {
            if (position < 0) {
                position += imageWidth;
            } else {
                position = maxPosition;
            }
            track.style.transform = `translateX(${position}px)`;
        }
    };
}

let budapestCarousel;
let tanzaniaCarousel;

window.addEventListener('load', () => {
     budapestCarousel = setupCarousel("b-track");
     tanzaniaCarousel = setupCarousel("t-track");
});
