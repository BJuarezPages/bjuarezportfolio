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

    if (scrollPosition > 700) {
      return 'bottom';
    } else if (scrollPosition > 300) {
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

  handleScroll();
});
