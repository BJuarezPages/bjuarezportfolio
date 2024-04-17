//Video redirect
document.getElementById('videoButton').addEventListener('click', function () {
    var myVideoID = document.getElementById('galloWhite');
    if (myVideoID) {
        myVideoID.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = 'gallo.html';
    }
});

//Hearts
const slideItems = document.querySelectorAll('#moritzSlideBarContainer .slideItem');

slideItems.forEach(slideItem => {
    const slideHeart = slideItem.querySelector('#slideHeart');

    slideHeart.addEventListener('click', () => {
        slideHeart.classList.toggle('slideHeartClick');
    });
});