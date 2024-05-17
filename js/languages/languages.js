document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos el idioma guardado en localStorage, si no hay ninguno, utilizamos el idioma por defecto ('es')
    var idiomaSeleccionado = localStorage.getItem('idioma') || 'Cast';
    var rutaActual = window.location.pathname;

    // Verificar si la URL tiene la extensión .html
    if (rutaActual.endsWith(".html")) {
        ultimoSegmento = rutaActual.substring(rutaActual.lastIndexOf("/") + 1, rutaActual.length - 5);
    } else {
        ultimoSegmento = rutaActual.substring(rutaActual.lastIndexOf("/") + 1);
    }
    // Cargamos el texto correspondiente al idioma guardado
    cargarIdioma(idiomaSeleccionado, ultimoSegmento);

    const idiomas = document.querySelectorAll('#languages div');

    eliminarActives(idiomas)
    document.getElementById('lang' + idiomaSeleccionado).classList.add('active');

    // Manejamos el evento de click en las banderas
    document.getElementById('langCast').addEventListener('click', function () {
        // Guardamos el idioma seleccionado en localStorage
        localStorage.setItem('idioma', 'Cast');
        cargarIdioma('Cast', ultimoSegmento);

        eliminarActives(idiomas)
        this.classList.add('active');
    });

    document.getElementById('langEng').addEventListener('click', function () {
        localStorage.setItem('idioma', 'Eng');
        cargarIdioma('Eng', ultimoSegmento);

        eliminarActives(idiomas)
        this.classList.add('active');
    });

    document.getElementById('langCat').addEventListener('click', function () {
        localStorage.setItem('idioma', 'Cat');
        cargarIdioma('Cat', ultimoSegmento);

        eliminarActives(idiomas)
        this.classList.add('active');
    });
});

function eliminarActives(idiomas) {
    idiomas.forEach(function (lang) {
        lang.classList.remove('active');
    });
}

function cargarIdioma(idioma, html) {
    // Obtenemos el archivo JSON utilizando una ruta relativa
    var fetchUrl = "";
    html == "index" ? fetchUrl = './js/languages/textos.json' :
        fetchUrl = './../../js/languages/textos.json'
    fetch(fetchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            //general
            document.querySelector('#linkHome p').innerText = data[idioma].inicio;
            document.querySelector('#linkMyWork p').innerText = data[idioma].mywork;
            document.querySelector('#linkAboutMe p').innerText = data[idioma].sobremi;
            document.querySelector('#linkContact p').innerText = data[idioma].contacto;

            document.querySelector('#copyright').innerText = data[idioma].copyright;
            document.querySelector('#telefon').innerText = data[idioma].telefon;
            document.querySelector('#locate').innerText = data[idioma].locate;

            //Portfolio
            if (html == "index") {
                document.querySelector('#work #graphics').innerText = data[idioma].grafico;
                document.querySelector('#work #motion').innerText = data[idioma].motion;
                document.querySelector('#work #design').innerText = data[idioma].design;

                document.querySelector('#buttonWork').innerText = data[idioma].myworks;
                document.querySelector('#buttonSobreMi').innerText = data[idioma].sobremi;

                document.querySelector('#myWork>#title>#name #trabajo').innerText = data[idioma].mywork;
                document.querySelector('#buttonOther').innerText = data[idioma].otros;

                document.querySelector('#sobremi2').innerText = data[idioma].sobremi;

                document.querySelector('#sobremiText1').innerText = data[idioma].sobremiText1;
                document.querySelector('#sobremiText2').innerText = data[idioma].sobremiText2;
                document.querySelector('#sobremiText3').innerText = data[idioma].sobremiText3;
                document.querySelector('#sobremiText4').innerText = data[idioma].sobremiText4;
                document.querySelector('#sobremiText5').innerText = data[idioma].sobremiText5;
                document.querySelector('#sobremiText6').innerText = data[idioma].sobremiText6;
                document.querySelector('#sobremiText7').innerText = data[idioma].sobremiText7;

                document.querySelector('#contactLeft>#containerForm>#title #contacta').innerText = data[idioma].contacta;

                document.querySelector('#emailFormValue').placeholder = data[idioma].example;
                document.querySelector('#nameFormValue').placeholder = data[idioma].escribe;
                document.querySelector('#consultFormValue').placeholder = data[idioma].cuentame;

                document.querySelector('#buttonSend').value = data[idioma].enviar;

                document.querySelector('#conectar').innerText = data[idioma].conectar;
                document.querySelector('#emailText').innerText = data[idioma].email;
            } else {
                document.querySelector('#agency').innerText = data[idioma].agency;
                document.querySelector('#year').innerText = data[idioma].year;
            }

            //Gallo
            if (html == "gallo") {
                document.querySelector('#generalDescription #description').innerText = data[idioma].pastasGalloDescription;

                document.querySelector('#galloWhiteLeft>#title1').innerText = data[idioma].pastasGalloCrear;
                document.querySelector('#galloWhiteLeft>#title2').innerText = data[idioma].pastasGalloSocial;
                document.querySelector('#imageBackgroundGallo>#text1>#text3').innerText = data[idioma].pastasGalloDesign;
                document.querySelector('#imageBackgroundGallo>#text1>#text2 ').innerText = data[idioma].pastasGalloBanner;
                document.querySelector('#galloCombinatedLeftContainer>#title1').innerText = data[idioma].pastasGalloCreative;
                document.querySelector('#galloCombinatedLeftContainer>#title2').innerText = data[idioma].pastasGalloNamePasta;
                document.querySelector('#galloCombinatedLeftContainer>#description').innerText = data[idioma].pastasGalloRosa;
                document.querySelector('#buttonVideo').innerText = data[idioma].watchVideo;
            }

            //Moritz
            if (html == "moritz") {
                document.querySelector('#generalDescription #description').innerText = data[idioma].moritzDescription;

                document.querySelector('#moritzWhiteLeftTitle>#title1').innerText = data[idioma].moritzText1;
                document.querySelector('#moritzWhiteLeftTitle>#title2').innerText = data[idioma].moritzText2;
                document.querySelector('#textContainer>#title1').innerText = data[idioma].moritzText3;
                document.querySelector('#textContainer>#title2').innerText = data[idioma].moritzText4;
                document.querySelector('.item1 #slideContainer>.text1').innerText = data[idioma].moritzText5;
                document.querySelector('.item1 #slideContainer>.text2').innerText = data[idioma].moritzText6;
                document.querySelector('.item2 #slideContainer>.text1').innerText = data[idioma].moritzText7;
                document.querySelector('.item2 #slideContainer>.text2').innerText = data[idioma].moritzText8;
                document.querySelector('#moritzBigContainerText>.text1').innerText = data[idioma].moritzText9;
                document.querySelector('#moritzBigContainerText>.text2').innerText = data[idioma].moritzText10;
                document.querySelector('#moritzGraphicsContainerText>.text1').innerText = data[idioma].moritzText11;
                document.querySelector('#moritzGraphicsContainerText>.text2').innerText = data[idioma].moritzText12;

                document.querySelector('#buttonVideo').innerText = data[idioma].watchVideo;
                document.querySelector('#videoButton2').innerText = data[idioma].watchVideo;
                document.querySelector('#videoButton3').innerText = data[idioma].watchVideo;
            }

            //Bocca
            if (html == "bocca") {
                document.querySelector('#generalDescription #description').innerText = data[idioma].boccaDescription;

                document.querySelector('#boccaBlackTitleContainer>#title1').innerText = data[idioma].boccaText1;
                document.querySelector('#item1 .text2').innerText = data[idioma].boccaText2;
                document.querySelector('#item2 .text2').innerText = data[idioma].boccaText3;
                document.querySelector('#boccaSocialMediaTitleContainer>#title1').innerText = data[idioma].boccaText4;
                document.querySelector('#boccaMenuTitleContainer>#title1').innerText = data[idioma].boccaText5;
            }

            //El Primo
            if (html == "el_primo") {
                document.querySelector('#generalDescription #description').innerText = data[idioma].elPrimoDescription;
            }

            //ElRow
            if (html == "el_row") {
                document.querySelector('#generalDescription #description').innerText = data[idioma].elRowDescription;

                document.querySelector('#elRowWhiteLeft #paragraph1').innerText = data[idioma].elRowText1;
                document.querySelector('#elRowWhiteLeft #paragraph2').innerText = data[idioma].elRowText2;
                document.querySelector('#elRowWhiteLeft #paragraph3').innerText = data[idioma].elRowText3;
                document.querySelector('#elRowCard>#text3').innerText = data[idioma].elRowText4;

                document.querySelector('#buttonVideo').innerText = data[idioma].watchVideo;
            }

            //Babies Uganda
            if (html == "babies_uganda") {
                document.querySelector('#generalDescription #description').innerText = data[idioma].ugandaDescription;

                document.querySelector('#ugandaText1').innerText = data[idioma].ugandaText1;
                document.querySelector('#ugandaText2').innerText = data[idioma].ugandaText2;
                document.querySelector('#ugandaText3').innerText = data[idioma].ugandaText3;
                document.querySelector('#ugandaText4').innerText = data[idioma].ugandaText4;
                document.querySelector('#ugandaText5').innerText = data[idioma].ugandaText5;
                document.querySelector('#ugandaText6').innerText = data[idioma].ugandaText6;
                document.querySelector('#ugandaText7').innerText = data[idioma].ugandaText7;

                document.querySelector('#buttonVideo').innerText = data[idioma].watchVideo2;
            }

            //Ta-Tung
            if (html == "ta_tung") {
                document.querySelector('#generalDescription #description').innerText = data[idioma].tatungDescription;

                document.querySelector('#taTungWhiteContainer>#title1').innerText = data[idioma].tatungText1;
                document.querySelector('#taTungWhiteContainer>#title2').innerText = data[idioma].tatungText2;
            }

            //Affinity
            if (html == "affinity") {
                document.querySelector('#generalDescription #description').innerText = data[idioma].tatungDescription;
            }

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
