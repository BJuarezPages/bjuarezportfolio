//Activar animación slide izquierda
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#affinityWhite img");

    images.forEach(image => {
        image.addEventListener("click", function () {
            this.classList.add("active");
            images.forEach(img => {
                if (img !== this) {
                    img.classList.remove("active");
                }
            });
        });
    });
});

let projectLeft = document.getElementById("projectLeft");
let projectRight = document.getElementById("projectRight");

projectLeft.addEventListener("click", function () {
    window.location.href = './../../html/moritz/moritz.html'
});
projectRight.addEventListener("click", function () {
    window.location.href = './../../html/ta_tung/ta_tung.html'
});