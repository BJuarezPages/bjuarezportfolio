//Video redirect
document.getElementById('videoButton').addEventListener('click', function () {
    var myVideoID = document.getElementById('galloWhite');
    if (myVideoID) {
        myVideoID.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = 'gallo.html';
    }
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