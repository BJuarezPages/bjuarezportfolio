// Obtener todos los contenedores de video
const videoContainers = document.querySelectorAll('.video-container');
let activeVideo = null;

// Función para manejar el evento de mouseover y mouseout
function handleMouse(event) {
    const currentContainer = event.currentTarget;

    if (event.type === 'mouseover') {
        if (currentContainer !== activeVideo) {
            currentContainer.classList.add('active');
        }
    } else if (event.type === 'mouseout') {
        if (currentContainer !== activeVideo) {
            currentContainer.classList.remove('active');
        }
    }
}

// Función para manejar el evento de clic en el video
function handleClickVideo(event) {
    const video = event.currentTarget.querySelector('video');

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Función para manejar el evento de clic
function handleClick(event) {
    const currentContainer = event.currentTarget;
    const video = currentContainer.querySelector('video');

    if (activeVideo && activeVideo !== currentContainer) {
        activeVideo.querySelector('video').pause();
        activeVideo.classList.remove('active');
    }

    activeVideo = currentContainer;

    currentContainer.classList.add('active');

    if (video.paused) {
        if (activeVideo && activeVideo !== currentContainer) {
            activeVideo.querySelector('video').pause();
            activeVideo.classList.remove('active');
        }
        video.play();
    } else {
        video.pause();
    }
}

// Función para manejar el evento de clic en el video en mobil
function handleClickVideoMobile(event) {
    const currentContainer = event.currentTarget;

    if (currentContainer !== activeVideo) {
        if (activeVideo) {
            const activeVideoElement = activeVideo.querySelector('video');
            activeVideoElement.pause();
        }

        const video = currentContainer.querySelector('video');
        video.play();
        activeVideo = currentContainer;
    } else {
        const video = currentContainer.querySelector('video');
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
}

// Verificar si es un dispositivo móvil
var isMobileTaTung = window.innerWidth <= 480;

function checkIfMobileGallo() {
    isMobileTaTung = window.innerWidth <= 480;

    if (isMobileTaTung) {
        videoContainers.forEach(container => {
            container.addEventListener('touchstart', handleClickVideoMobile, { passive: true });

            container.removeEventListener('mouseover', handleMouse);
            container.removeEventListener('mouseout', handleMouse);
            container.removeEventListener('click', handleClick);
            container.removeEventListener('click', handleClickVideo);
        });
    } else {
        videoContainers.forEach(container => {
            container.addEventListener('touchstart', handleClickVideoMobile, { passive: true });
            container.addEventListener('mouseover', handleMouse);
            container.addEventListener('mouseout', handleMouse);
            container.addEventListener('click', handleClick);
            container.addEventListener('click', handleClickVideo);
        });
    }
}

window.addEventListener('resize', checkIfMobileGallo);
window.addEventListener('load', checkIfMobileGallo);