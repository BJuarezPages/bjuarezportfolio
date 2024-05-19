// ----------- MOBILE------------------

const expandHeader = document.querySelector('.mobileArrow');
let isExpanded = false;
let startY = null;

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
    pagesContainer.style.marginTop = isExpanded ? '' : '40%';

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
        container.style.width = !isExpanded ? '13.5vw' : '';
        container.style.maxWidth = !isExpanded ? '13.5vw' : '';
        container.style.height = !isExpanded ? '13.5vw' : '';
        container.style.maxHeight = !isExpanded ? '13.5vw' : '';
        container.style.marginBottom = !isExpanded ? '5%' : '';
    });

    isExpanded = !isExpanded;

    const header = document.querySelector('header');
    header.style.height = isExpanded ? '100vh' : '5vh';

    expandHeader.style.top = isExpanded ? '10vh' : '-3vh';
    expandHeader.style.transform = isExpanded ? 'translateX(-50%) rotate(225deg)' : 'translateX(-50%) rotate(45deg)';
    expandHeader.style.zIndex = isExpanded ? '2' : '-2';
}

const header = document.querySelector('header');

function handleTouchStart(e) {
    startY = e.touches[0].clientY;
}

function handleTouchMove(e) {
    if (startY !== null) {
        const deltaY = e.touches[0].clientY - startY;
        const newHeight = isExpanded ? Math.max(5, Math.min(100, 100 - deltaY)) : Math.max(5, Math.min(100, 5 - deltaY));
        header.style.height = newHeight + 'vh';
        if (deltaY > 50 && isExpanded) { // Desplazamiento hacia abajo mayor a 50 píxeles
            toggleLanguagesAndIcons();
            startY = null; // Restablecer startY para evitar múltiples expansiones
        } else if (deltaY < -50 && !isExpanded) { // Desplazamiento hacia arriba mayor a 50 píxeles
            toggleLanguagesAndIcons();
            startY = null; // Restablecer startY para evitar múltiples contracciones
        }
    }
}

function resetHeaderHeight() {
    header.style.transition = 'height 0.3s ease'; // Transición CSS
    header.style.height = isExpanded ? '100vh' : '5vh';
}

// Verificar si es un dispositivo móvil
var isMobileGlobal = window.innerWidth <= 480;

function checkIfMobile1() {
    isMobileGlobal = window.innerWidth <= 480;

    if (isMobileGlobal) {
        expandHeader.addEventListener('click', toggleLanguagesAndIcons);
        expandHeader.addEventListener('touchstart', handleTouchStart, { passive: true });
        expandHeader.addEventListener('touchmove', handleTouchMove, { passive: true });
    
        // Restablecer la altura del encabezado si se deja de mover
        window.addEventListener('touchend', resetHeaderHeight);
    
        document.querySelectorAll('#pages a').forEach(link => {
            link.addEventListener('click', () => {
                isExpanded ? toggleLanguagesAndIcons() : null
            });
        });
    } else {
        removeMobileListeners();
        resetHTML();
    }
}

window.addEventListener('resize', checkIfMobile1);
window.addEventListener('load', checkIfMobile1);

function resetHTML() {
    const languagesAndIcons = document.querySelectorAll('#languages, #icons');
    languagesAndIcons.forEach(element => {
        element.style = '';
    });

    const pagesContainer = document.querySelector('#pages');
    pagesContainer.style = '';

    const pagesLinks = document.querySelectorAll('#pages a');
    pagesLinks.forEach(link => {
        link.style = '';

        const paragraph = link.querySelector('p');
        paragraph.style = '';
    });

    const bgContainers = document.querySelectorAll('.backgroundSizeContainer');
    bgContainers.forEach(container => {
        container.style = '';
    });

    const bgContainers2 = document.querySelectorAll('.backgroundSizeContainer2');
    bgContainers2.forEach(container => {
        container.style = '';
    });

    const header = document.querySelector('header');
    header.style = '';

    expandHeader.style = '';

    isExpanded = false;
}

function removeMobileListeners() {
    expandHeader.removeEventListener('click', toggleLanguagesAndIcons);
    expandHeader.removeEventListener('touchstart', handleTouchStart);
    expandHeader.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', resetHeaderHeight);

    document.querySelectorAll('#pages a').forEach(link => {
        link.removeEventListener('click', () => {
            isExpanded ? toggleLanguagesAndIcons() : null
        });
    });
}