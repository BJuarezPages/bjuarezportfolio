//Video redirect
document.getElementById('buttonVideo').addEventListener('click', function () {
    openPopup('./../../resources/Moritz/Campaña Graus Moritz.mp4', '65vw');
});

document.getElementById('videoButton2').addEventListener('click', function () {
    openPopup('./../../resources/Moritz/Mockup_Video_Gaudir Dun Dijous.mp4', '17vw')
});

document.getElementById('videoButton3').addEventListener('click', function () {
    openPopup('./../../resources/Moritz/Mockup_Video_SantJordi.mp4', '17vw')
});

//Hearts
const slideItems = document.querySelectorAll('#moritzSlideBarContainer .slideItem');

slideItems.forEach(slideItem => {
    const slideHeart = slideItem.querySelector('#slideHeart');

    slideHeart.addEventListener('click', () => {
        slideHeart.classList.toggle('slideHeartClick');
    });
});