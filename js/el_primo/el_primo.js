// Verificar si es un dispositivo móvil
const isMobile =  window.innerWidth <= 768;

if (!isMobile) {
  window.addEventListener('load', function () {
    const container = document.querySelector('.background-world');
    const cloudContainer = document.querySelector('.cloud-container');
    const primoNumber1 = document.querySelector('.primo-number1');
    const primoNumber2 = document.querySelector('.primo-number2');
    const primoNumber3 = document.querySelector('.primo-number3');
    const primoNumber4 = document.querySelector('.primo-number4');

    function handleScroll() {
      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const rotation = scrollPercentage * 360;

      container.style.transform = `rotate(${rotation}deg)`;
      cloudContainer.style.transform = `rotate(${-rotation / 2}deg)`;

      const scrollDirection = getScrollDirection();
      adjustElementPositions(scrollDirection);
    }

    function getScrollDirection() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 500) {
        return 'bottom';
      } else if (scrollPosition > 100) {
        return 'top';
      } else {
        return 'middle';
      }
    }

    function adjustElementPositions(scrollDirection) {
      switch (scrollDirection) {
        case 'top':
          primoNumber1.style.cssText = 'top: 21%; left: 19%;';
          primoNumber2.style.cssText = 'top: 18%; right: 12%;';
          primoNumber3.style.cssText = 'bottom: 45%; left: 45%;';
          primoNumber4.style.cssText = 'bottom: 45%; right: 45%;';
          break;
        case 'bottom':
          primoNumber1.style.cssText = 'top: 21%; left: 19%;';
          primoNumber2.style.cssText = 'top: 18%; right: 12%;';
          primoNumber3.style.cssText = 'bottom: -20%; left: 5%;';
          primoNumber4.style.cssText = 'bottom: -5%; right: 15%;';
          break;
        default:
          primoNumber1.style.cssText = 'top: 45%; left: 45%;';
          primoNumber2.style.cssText = 'top: 45%; right: 45%;';
          primoNumber3.style.cssText = 'bottom: 45%; left: 45%;';
          primoNumber4.style.cssText = 'bottom: 45%; right: 45%;';
          break;
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll(); // Llama a handleScroll() para ajustar las posiciones iniciales
  });

  //Funcion flores
  function adjustElementPositions(scrollDirection) {
    var positions = {
      'top': [
        { top: '5%', left: '2%' },
        { top: '5%', right: '-5%' },
        { top: '3%', left: '45%' },
        { top: '0%', left: '73%' },
        { top: '7%', left: '60%' },

        { top: '45%', left: '45%' },
        { top: '45%', left: '45%' },
        { top: '45%', right: '45%' },
        { top: '45%', right: '45%' },

        { top: '45%', left: '45%' },
        { top: '45%', left: '45%' },
        { top: '45%', left: '45%' },
        { top: '45%', right: '45%' },
        { top: '45%', right: '45%' }
      ],
      'middle': [
        { top: '5%', left: '2%' },
        { top: '5%', right: '-5%' },
        { top: '3%', left: '45%' },
        { top: '0%', left: '73%' },
        { top: '7%', left: '60%' },

        { top: '34%', left: '2%' },
        { top: '36%', left: '20%' },
        { top: '35%', right: '10%' },
        { top: '26%', right: '2%' },

        { top: '45%', left: '45%' },
        { top: '45%', left: '45%' },
        { top: '45%', left: '45%' },
        { top: '45%', right: '45%' },
        { top: '45%', right: '45%' }
      ],
      'bottom': [
        { top: '5%', left: '2%' },
        { top: '5%', right: '-5%' },
        { top: '3%', left: '45%' },
        { top: '0%', left: '73%' },
        { top: '7%', left: '60%' },

        { top: '34%', left: '2%' },
        { top: '36%', left: '20%' },
        { top: '35%', right: '10%' },
        { top: '26%', right: '2%' },

        { top: '61%', left: '-3%' },
        { top: '56%', left: '20%' },
        { top: '82%', left: '56%' },
        { top: '51%', right: '3%' },
        { top: '80%', right: '8%' }
      ],
      'default': [
        { top: '45%', left: '45%' },
        { top: '45%', right: '45%' },
        { top: '45%', left: '45%' },
        { top: '45%', left: '45%' },
        { top: '45%', left: '45%' },

        { top: '45%', left: '45%' },
        { top: '45%', left: '45%' },
        { top: '45%', right: '45%' },
        { top: '45%', right: '45%' },

        { top: '45%', left: '45%' },
        { top: '45%', left: '45%' },
        { top: '45%', left: '45%' },
        { top: '45%', right: '45%' },
        { top: '45%', right: '45%' }
      ]
    };

    document.querySelectorAll('.primo-flowers').forEach(function (element, index) {
      var pos = positions[scrollDirection][index];
      element.style.top = pos.top || '';
      element.style.left = pos.left || '';
      element.style.right = pos.right || '';
      element.style.bottom = pos.bottom || '';
    });
  }

  window.addEventListener('scroll', function () {
    var scrollDirection = 'default';
    var scrollPosition = window.scrollY;

    if (scrollPosition > 2200) {
      scrollDirection = 'bottom';
    } else if (scrollPosition > 2000) {
      scrollDirection = 'middle';
    } else if (scrollPosition > 1800) {
      scrollDirection = 'top';
    }

    adjustElementPositions(scrollDirection);
  });

  document.addEventListener("DOMContentLoaded", function (event) {
    const clouds = document.querySelectorAll('.carnival-cloud');
    const usedSpeeds = []; // Registro de velocidades utilizadas
    
    clouds.forEach(cloud => {
      let randomSpeed;
      do {
        randomSpeed = Math.random() * (22 - 10) + 10; // Genera una nueva velocidad aleatoria
      } while (usedSpeeds.includes(randomSpeed)); // Verifica si la velocidad ya ha sido utilizada
      
      usedSpeeds.push(randomSpeed); // Agrega la velocidad a las utilizadas
      cloud.style.animationDuration = `${randomSpeed}s`;
    });
  });
}

//HANDS
document.addEventListener("DOMContentLoaded", function() {
  const hands = document.querySelectorAll(".primo-hand");

  hands.forEach(hand => {
      const durationLeft = Math.random() * 1 + 0.5; // Duración entre 1 y 3 segundos
      const durationRight = Math.random() * 1 + 0.5; // Duración entre 1 y 3 segundos
      const rotateLeft = Math.random() * 10 - 5; // Rotación entre -5 y 5 grados
      const rotateRight = Math.random() * 10 - 5; // Rotación entre -5 y 5 grados
      const translateLeft = Math.random() * 10 - 5; // Traslación horizontal entre -5 y 5 px
      const translateRight = Math.random() * 10 - 5; // Traslación horizontal entre -5 y 5 px

      hand.style.setProperty("--durationLeft", `${durationLeft}s`);
      hand.style.setProperty("--durationRight", `${durationRight}s`);
      hand.style.setProperty("--rotateLeft", `${rotateLeft}deg`);
      hand.style.setProperty("--rotateRight", `${rotateRight}deg`);
      hand.style.setProperty("--translateLeft", `${translateLeft}px`);
      hand.style.setProperty("--translateRight", `${translateRight}px`);
  });
});

//Animaciones

const paragraphs = document.querySelectorAll('.primo-hand');

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

// Verificar si es un dispositivo móvil
const isMobilePrimo =  window.innerWidth <= 768;

if (!isMobilePrimo) {
    // Agregar eventos
    window.addEventListener('scroll', addVisibleClass, { passive: true });
    addVisibleClass();
}
