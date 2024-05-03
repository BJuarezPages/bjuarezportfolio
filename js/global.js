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