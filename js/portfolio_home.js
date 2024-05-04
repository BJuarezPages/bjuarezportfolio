/* ---- HEADER ---- */

/* MOVEMENT ON THE WEB */
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


/* ---- HOME ---- */
//Ir a la seccion de MyWork
function redirectToMyWork() {
  var myWorkSection = document.getElementById('myWork');
  if (myWorkSection) {
    myWorkSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = 'index.html';
  }
}

/* ---- MYWORK ---- */

/* SCROLL INTERACTIVE */
// Variables para almacenar la posición de desplazamiento anterior y la dirección del desplazamiento
let lastScrollPos = window.scrollY || window.pageYOffset;
let scrollDirection;
const elements = document.querySelectorAll('.sizeContainer'); // Obtener todos los elementos .sizeContainer

// Función para manejar la visibilidad de los elementos
function handleVisibility() {
  // Obtener la posición actual del desplazamiento
  const currentScrollPos = window.scrollY || window.pageYOffset;

  // Determinar la dirección del desplazamiento
  if (currentScrollPos > lastScrollPos) {
    scrollDirection = 'down';
  } else {
    scrollDirection = 'up';
  }

  // Actualizar la posición de desplazamiento anterior
  lastScrollPos = currentScrollPos;

  // Iterar sobre los elementos y manejar la visibilidad
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const halfwayPoint = (rect.top + rect.bottom) / 2; // Calcular el punto medio del elemento

    // Mostrar u ocultar el elemento según la dirección del desplazamiento y su posición en la pantalla
    if (scrollDirection === 'down' && halfwayPoint <= window.innerHeight) {
      el.classList.add('visible');
    } else if (scrollDirection === 'up' && halfwayPoint > window.innerHeight) {
      el.classList.remove('visible');
    }
  });
}

// Función para cargar todos los contenedores hasta el halfwaypoint en la carga inicial de la página
function loadContainers() {
  const halfwayPoint = window.innerHeight / 2; // Calcular halfwaypoint

  // Iterar sobre los elementos y mostrar u ocultar según su posición en la pantalla
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const elHalfwayPoint = (rect.top + rect.bottom) / 2; // Calcular el halfwaypoint del elemento

    // Mostrar u ocultar el elemento según su posición en la pantalla
    if (elHalfwayPoint <= window.innerHeight) {
      el.classList.add('visible');
    }
  });
}

// Evento de desplazamiento para manejar la visibilidad de los elementos
window.addEventListener('scroll', handleVisibility);

// Llamar a handleVisibility en la carga inicial de la página para mostrar elementos hasta el límite justo en ese momento
document.addEventListener('DOMContentLoaded', () => {
  handleVisibility();
  loadContainers(); // Llamar a la función para cargar los contenedores hasta el halfwaypoint
});


/* WHILE SLIDER */

/* ---- ABOUT ME ---- */

const paragraphs = document.querySelectorAll('#aboutMeLeft p');

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addVisibleClass() {
  paragraphs.forEach(paragraph => {
    if (isElementInViewport(paragraph)) {
      paragraph.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', addVisibleClass);
addVisibleClass();

/* ---- CONTACT ---- */
/*
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
*/

/* ---- EXAMPLE ---- */
