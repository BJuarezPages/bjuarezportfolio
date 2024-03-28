/* HEADER */
document.addEventListener('DOMContentLoaded', function () {
  // const imagen = document.getElementById('iconInstagram');

  // imagen.addEventListener('mouseover', function() {
  //   imagen.src = '../resources/Portfolio/Icon_Instagram.png'; // Cambiar la imagen en hover
  // });

  // imagen.addEventListener('mouseout', function() {
  //   imagen.src = '../resources/Portfolio/Icon_Instagram_V.png'; // Restaurar la imagen original al salir del hover
  // });
});


/* HOME */

/* MYWORK */

/* ABOUT ME */

/* CONTACT */

document.getElementById("consultForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario

  var email = document.getElementById("emailFormValue").value.trim();
  var name = document.getElementById("nameFormValue").value.trim();
  var consult = document.getElementById("consultFormValue").value.trim();

  if (email === "" || name === "" || consult === "") {
    alert("Por favor, complete todos los campos.");
    return; // Salir de la función sin enviar el formulario
  }

  // Enviar el formulario por correo electrónico utilizando EmailJS
  emailjs.send("default_service", "template_id", {
    email: email,
    name: name,
    consult: consult
  }).then(function (response) {
    alert("Consulta enviada con éxito.");
  }, function (error) {
    alert("Error al enviar la consulta. Por favor, inténtelo de nuevo más tarde.");
  });
});

/* EXAMPLE */

window.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  container.addEventListener("mousewheel", function (e) {
    e.deltaY < 0
      ? container.scrollBy(30, 0)
      : container.scrollBy(-30, 0);
    e.preventDefault();
  });

  container.addEventListener("touchmove", function (e) {
    e.preventDefault();
    const touch = e.touches[0];
    const xDiff = touch.pageX - touch.startX;
    const yDiff = touch.pageY - touch.startY;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      e.target.scrollBy(-xDiff, 0);
    } else {
      e.target.scrollBy(-yDiff, 0);
    }
  });
});