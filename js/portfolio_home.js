/* HEADER */

/* HOME */

/* MYWORK */

/* ABOUT ME */

/* CONTACT */

document.getElementById("consultForm").addEventListener("submit", function(event) {
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
    }).then(function(response) {
      alert("Consulta enviada con éxito.");
    }, function(error) {
      alert("Error al enviar la consulta. Por favor, inténtelo de nuevo más tarde.");
    });
  });

