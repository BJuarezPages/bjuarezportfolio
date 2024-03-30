/* HEADER */
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let barra = window.scrollY;
    let posicion = (barra * 0.3);
    document.body.style.backgroundPosition = "center " + posicion + "px";
    let contentsDesktop = document.getElementsByClassName("desktop");
    for (let content of contentsDesktop) {
      content.style.transform = "translateY(" + posicion + "px)";
    }
  });
});

function updateHeader() {
  const currentSectionId = getVisibleSectionId();
  const links = document.querySelectorAll('#pages a');

  links.forEach(link => {
    link.classList.remove('current');
    const linkIcon = link.querySelector('.backgroundSizeContainer2');
    const linkText = link.querySelector('p');

    if (link.getAttribute('id') === `link${currentSectionId.charAt(0).toUpperCase() + currentSectionId.slice(1)}`) {
      link.classList.add('current');
      linkIcon.classList.add('current');
      linkText.classList.add('current-text');
    } else {
      linkIcon.classList.remove('current');
      linkText.classList.remove('current-text');
    }
  });
}

function scrollToSection(targetId) {
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Función para obtener la sección más visible
function getVisibleSectionId() {
  const sections = document.querySelectorAll('section');
  let maxVisibleRatio = 0;
  let maxVisibleSectionId = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(0, rect.top));
    const sectionHeight = section.offsetHeight;
    const visibleRatio = visibleHeight / sectionHeight;

    if (visibleRatio > maxVisibleRatio) {
      maxVisibleRatio = visibleRatio;
      maxVisibleSectionId = section.getAttribute('id');
    }
  });

  return maxVisibleSectionId;
}

document.addEventListener('DOMContentLoaded', () => {
  updateHeader();
});

window.addEventListener('scroll', () => {
  requestAnimationFrame(updateHeader);
});

window.addEventListener('resize', () => {
  requestAnimationFrame(updateHeader);
});

document.querySelectorAll('#pages a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const linkIcon = link.querySelector('.backgroundSizeContainer2');
    const linkText = link.querySelector('p');
    linkIcon.classList.add('hovered');
    linkText.classList.add('hovered-text');
  });

  link.addEventListener('mouseleave', () => {
    const linkIcon = link.querySelector('.backgroundSizeContainer2');
    const linkText = link.querySelector('p');
    linkIcon.classList.remove('hovered');
    linkText.classList.remove('hovered-text');
  });

  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    link.classList.add('locked');
    scrollToSection(targetId);
    requestAnimationFrame(() => {
      updateHeader();
      link.classList.remove('locked');
    });
  });
});


/* HOME */

/* MYWORK */

// Variables
/*let isDragging = false;
let startX, scrollLeft;

// Función para manejar el clic y arrastre
function handleMouseDown(e) {
  isDragging = true;
  startX = e.pageX - document.getElementById('rectangleMarks').offsetLeft;
  scrollLeft = document.getElementById('rectangleMarks').scrollLeft;
}

function handleMouseMove(e) {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - document.getElementById('rectangleMarks').offsetLeft;
  const walk = (x - startX) * 3; // Ajusta la sensibilidad del arrastre
  document.getElementById('rectangleMarks').scrollLeft = scrollLeft - walk;
}

function handleMouseUp() {
  isDragging = false;
}

// Event Listeners
document.getElementById('rectangleMarks').addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);*/


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

