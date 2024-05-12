// Esperar a que la página se cargue completamente
// window.addEventListener('load', function () {
//     // Agregar clase para animar la transición
//     document.body.classList.add('fade-in-active');
// });

//Index redirect
var enlaces = document.querySelectorAll('[id^="link"]');
console.log(enlaces)

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
        event.preventDefault();
        // Agregar clase para animar la transición
        // document.body.classList.add('fade-out');
        var href = this.getAttribute('href');
        // Esperar la animación antes de redirigir
        setTimeout(function () {
            window.location.href = "./../../index.html" + href;
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.getElementById('closeButton');
    const darkOverlay = document.getElementById('darkOverlay');
    const popupContainer = document.getElementById('popupContainer');

    // Verificar si los elementos existen antes de agregar los listeners
    if (closeButton && darkOverlay && popupContainer) {
        closeButton.addEventListener('click', closePopup);
        darkOverlay.addEventListener('click', closePopup);
    }
});

function openPopup(videoSrc, popupWidth) {
    const video = document.querySelector('.popup-inner');
    video.src = videoSrc;
    video.load();
    video.style.width = popupWidth;
    video.play();
    popupContainer.classList.add('active');
}

function closePopup() {
    const video = document.querySelector('.popup-inner');
    video.pause();
    popupContainer.classList.remove('active');
}

// ----------- MOBILE------------------

const header = document.querySelector('header');
let isExpanded = false;

function toggleLanguagesAndIcons() {
    const languagesAndIcons = document.querySelectorAll('#languages, #icons');
    languagesAndIcons.forEach(element => {
        element.style.display = isExpanded ? 'none' : 'flex';
        element.style.order = isExpanded ? 'initial' : '2';
        element.style.width = isExpanded ? '' : '90%';
    });

    const pagesContainer = document.querySelector('#pages');
    pagesContainer.style.flexWrap = isExpanded ? '' : 'wrap';
    pagesContainer.style.justifyContent = isExpanded ? '' : 'flex-start';
    pagesContainer.style.marginBottom = isExpanded ? '' : '15%';

    const pagesLinks = document.querySelectorAll('#pages a');
    pagesLinks.forEach(link => {
        link.style.width = !isExpanded ? '50%' : '';
        link.style.height = !isExpanded ? '20vh' : '';

        const paragraph = link.querySelector('p');
        paragraph.style.fontSize = !isExpanded ? '3vh' : '';
    });

    const bgContainers = document.querySelectorAll('.backgroundSizeContainer');
    bgContainers.forEach(container => {
        container.style.height = !isExpanded ? '10vh' : '';
        container.style.maxWidth = !isExpanded ? '12.2vw' : '';
    });

    const bgContainers2 = document.querySelectorAll('.backgroundSizeContainer2');
    bgContainers2.forEach(container => {
        container.style.width = !isExpanded ? '10.5vw' : '';
        container.style.maxWidth = !isExpanded ? '10.5vw' : '';
        container.style.height = !isExpanded ? '10.5vh' : '';
        container.style.maxHeight = !isExpanded ? '10.5vh' : '';
    });

    isExpanded = !isExpanded;

    header.style.height = isExpanded ? '100vh' : '5vh';
}

// Verificar si es un dispositivo móvil
const isMobileGlobal = window.innerWidth <= 480;

if (isMobileGlobal) {
    header.addEventListener('click', toggleLanguagesAndIcons);
}