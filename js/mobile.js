// ----------- MOBILE------------------

const expandHeader = document.querySelector('.mobileArrow');
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
        container.style.width = !isExpanded ? '13.5vw' : '';
        container.style.maxWidth = !isExpanded ? '13.5vw' : '';
        container.style.height = !isExpanded ? '13.5vw' : '';
        container.style.maxHeight = !isExpanded ? '13.5vw' : '';
        container.style.marginBottom = !isExpanded ? '5%' : '';
    });

    isExpanded = !isExpanded;

    const header = document.querySelector('header');
    header.style.height = isExpanded ? '100vh' : '5vh';

    expandHeader.style.top = isExpanded ? '0vh' : '-3vh';
    expandHeader.style.transform = isExpanded ? 'translateX(-50%) rotate(225deg)' : 'translateX(-50%) rotate(45deg)';
    expandHeader.style.zIndex = isExpanded ? '2' : '-2';
}

// Verificar si es un dispositivo móvil
const isMobileGlobal = window.innerWidth <= 480;

if (isMobileGlobal) {
    expandHeader.addEventListener('click', toggleLanguagesAndIcons);
}