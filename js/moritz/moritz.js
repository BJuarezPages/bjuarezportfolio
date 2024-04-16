//Video redirect
document.getElementById('videoButton').addEventListener('click', function () {
    var myVideoID = document.getElementById('galloWhite');
    if (myVideoID) {
        myVideoID.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = 'gallo.html';
    }
});
