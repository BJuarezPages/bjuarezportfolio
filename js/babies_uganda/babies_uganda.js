//Video redirect
document.getElementById('babiesUgandaWhiteLeft').addEventListener('click', function () {
    openPopup('./../../resources/Babies Uganda/Xmas Burofax.mp4', '65vw', '36.55vw');
});

let projectLeft = document.getElementById("projectLeft");
let projectRight = document.getElementById("projectRight");

projectLeft.addEventListener("click", function () {
    window.location.href = './../../html/el_row/el_row.html'
});
projectRight.addEventListener("click", function () {
    window.location.href = './../../html/gallo/gallo.html'
});