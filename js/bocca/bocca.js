document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const videoThumbnails = item.querySelectorAll(".itemGridBocca, .itemGridCachito");
        const mainVideo = item.querySelector(".itemVideo");
        let videoLoaded = false; // Indicador para controlar si el video está cargado
        var selectedThumbnail = null;


        mainVideo.addEventListener("loadedmetadata", function () {
            videoLoaded = true; // Marcar el video como cargado cuando los metadatos estén disponibles
        });

        videoThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener("mouseover", function () {
                this.style.opacity = "0.4"; // Opacidad al pasar el cursor sobre la miniatura
            });

            thumbnail.addEventListener("mouseout", function () {
                this.style.opacity = "1"; // Restaurar la opacidad al quitar el cursor
            });

            thumbnail.addEventListener("click", function () {
                if (!videoLoaded) return; // Salir si el video aún no está cargado completamente

                // Quitar la clase "selected" de la imagen previamente seleccionada
                if (selectedThumbnail) {
                    selectedThumbnail.classList.remove("selected");
                }

                // Agregar la clase "selected" a la imagen actual
                this.classList.add("selected");
                selectedThumbnail = this;

                const videoNumber = this.getAttribute("data-video-number");
                const folderName = item.id === "item1" ? "Bocca Club" : "Cachito de Sant Cugat";
                let videoSrc;
                let posterSrc;

                // Verificar si es un video de Bocca Club y ajustar el número del video si es necesario
                if (folderName === "Bocca Club") {
                    videoSrc = `./../../resources/Bocca/${folderName}/Bocca_Video_${videoNumber}.mp4`;
                    posterSrc = `./../../resources/Bocca/${folderName}/Bocca_Portada_${videoNumber}.png`;

                } else {
                    videoSrc = `./../../resources/Bocca/${folderName}/Cachito_Video_${videoNumber}.mp4`;
                    posterSrc = `./../../resources/Bocca/${folderName}/Cachito_Portada_${videoNumber}.png`;
                }

                mainVideo.pause(); // Pausar el video principal si está reproduciendo
                mainVideo.src = videoSrc; // Cambiar el src del video principal al src del source correspondiente
                mainVideo.poster = posterSrc;
                mainVideo.load(); // Cargar el nuevo video
                mainVideo.play(); // Reproducir el nuevo video
            });
        });
    });
});

let projectLeft = document.getElementById("projectLeft");
let projectRight = document.getElementById("projectRight");

projectLeft.addEventListener("click", function () {
    window.location.href = './../../html/gallo/gallo.html'
});
projectRight.addEventListener("click", function () {
    window.location.href = './../../html/moritz/moritz.html'
});