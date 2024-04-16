// Esperar a que la página se cargue completamente
window.addEventListener('load', function () {
    // Agregar clase para animar la transición
    document.body.classList.add('fade-in-active');
});

//Index redirect
var enlaces = document.querySelectorAll('[id^="link"]');
console.log(enlaces)

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
        event.preventDefault();
        // Agregar clase para animar la transición
        document.body.classList.add('fade-out');
        var href = this.getAttribute('href');
        // Esperar la animación antes de redirigir
        setTimeout(function () {
            window.location.href = "./../../index.html" + href;
        }, 500);
    });
});

//Video POPUP
const openButton = document.getElementById('buttonVideo');
const closeButton = document.getElementById('closeButton');
const popupContainer = document.getElementById('popupContainer');
const darkOverlay = document.getElementById('darkOverlay');

function openPopup() {
    popupContainer.classList.add('active');
}

function closePopup() {
    popupContainer.classList.remove('active');
}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
darkOverlay.addEventListener('click', closePopup);
