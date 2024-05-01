document.getElementById('buttonVideo').addEventListener('click', function () {
    openPopup('./../../resources/Gallo/Video Final Unai .mp4', '65vw');
});

const imageWebBanner = document.getElementById('imageWebBanner');
const imageBackgroundGallo = document.getElementById('imageBackgroundGallo');
const paragraphs = document.querySelectorAll('#galloCombinatedLeftContainer p');

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function addVisibleClass() {
    if (isElementInViewport(imageWebBanner)) {
        imageWebBanner.classList.add('visible');
    }

    if (isElementInViewport(imageBackgroundGallo)) {
        imageBackgroundGallo.classList.add('visible');
    }

    paragraphs.forEach(paragraph => {
        if (isElementInViewport(paragraph)) {
            paragraph.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', addVisibleClass);
addVisibleClass();