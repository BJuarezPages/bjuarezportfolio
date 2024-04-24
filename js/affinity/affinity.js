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

