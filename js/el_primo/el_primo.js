window.addEventListener('load', function () {
  function handleScroll() {
    var container = document.querySelector('.background-world');
    var scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    var rotation = scrollPercentage * 360;

    container.style.transform = 'rotate(' + rotation + 'deg)';
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);

  handleScroll();
});
