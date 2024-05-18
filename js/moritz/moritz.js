//Video redirect
document.getElementById('buttonVideo').addEventListener('click', function () {
    openPopup('./../../resources/Moritz/Campaña Graus Moritz.mp4', '65vw', '36.55vw');
});

document.getElementById('videoButton2').addEventListener('click', function () {
    openPopup('./../../resources/Moritz/Mockup_Video_Gaudir Dun Dijous.mp4', '17vw', '36.55vw')
});

document.getElementById('videoButton3').addEventListener('click', function () {
    openPopup('./../../resources/Moritz/Mockup_Video_SantJordi.mp4', '17vw', '36.55vw')
});

//Hearts
const slideItems = document.querySelectorAll('#moritzSlideBarContainer .slideItem');

slideItems.forEach(slideItem => {
    const slideHeart = slideItem.querySelector('#slideHeart');

    slideHeart.addEventListener('click', () => {
        slideHeart.classList.toggle('slideHeartClick');
    });
});

//Animaciones

const paragraphs = document.querySelectorAll('#textContainer div');
const beerMoritz = document.getElementById('beerMoritz');
const mobile1 = document.querySelector('.video-container1');
const paragraphs2 = document.querySelectorAll('#moritzBigContainerText p');
const mobile2 = document.querySelector('.video-container2');
const paragraphs3 = document.querySelectorAll('#moritzGraphicsContainerText p');
const mobile3 = document.querySelector('.video-container3');
const beerImage = document.getElementById('beerImage');

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isElementInViewport2(element) {
    var rect = element.getBoundingClientRect();
    var scrollY = window.scrollY || window.pageYOffset;
    var viewportTop = scrollY;
    var viewportBottom = scrollY + window.innerHeight;

    var elementTop = rect.top + scrollY;
    var elementBottom = rect.bottom + scrollY;

    // Verifica si alguna parte del elemento está dentro de la ventana
    return (elementTop >= viewportTop && elementTop <= viewportBottom) ||
        (elementBottom >= viewportTop && elementBottom <= viewportBottom);
}

function addVisibleClass() {

    paragraphs.forEach(paragraph => {
        if (isElementInViewport(paragraph)) {
            paragraph.classList.add('visible');
        }
    });

    if (isElementInViewport2(beerMoritz)) {
        beerMoritz.classList.add('visible');
    }

    if (isElementInViewport2(mobile1)) {
        mobile1.classList.add('visible');
    }

    paragraphs2.forEach(paragraph => {
        if (isElementInViewport(paragraph)) {
            paragraph.classList.add('visible');
        }
    });

    if (isElementInViewport2(mobile2)) {
        mobile2.classList.add('visible');
    }

    paragraphs3.forEach(paragraph => {
        if (isElementInViewport(paragraph)) {
            paragraph.classList.add('visible');
        }
    });

    if (isElementInViewport2(mobile3)) {
        mobile3.classList.add('visible');
    }

    if (isElementInViewport2(beerImage)) {
        beerImage.classList.add('visible');
    }
}

// Verificar si es un dispositivo móvil
var isMobileMoritz = window.innerWidth <= 480;

function checkIfMobileMoritz() {
    isMobileMoritz = window.innerWidth <= 480;

    if (isMobileMoritz) {
        window.removeEventListener('scroll', addVisibleClass, { passive: true });
    } else {
        window.addEventListener('scroll', addVisibleClass, { passive: true });
        addVisibleClass();
    }
}

window.addEventListener('resize', checkIfMobileMoritz);
window.addEventListener('load', checkIfMobileMoritz);