//Video redirect
document.getElementById('elRowCard').addEventListener('click', function () {
    openPopup('./../../resources/El Row/Elrow Limited - Talk 2 Me - Original FEED.mp4', '48.8vw', '36.55vw');
});

let projectLeft = document.getElementById("projectLeft");
let projectRight = document.getElementById("projectRight");

projectLeft.addEventListener("click", function () {
    window.location.href = './../../html/el_primo/el_primo.html'
});
projectRight.addEventListener("click", function () {
    window.location.href = './../../html/babies_uganda/babies_uganda.html'
});