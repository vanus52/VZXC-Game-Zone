document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.querySelector('.preloader');
  const preloaderRow = document.querySelector('.preloader__row');
  
  preloaderRow.addEventListener('animationend', function() {
    preloader.classList.add('preloader-hide');

    setTimeout(() => {
      preloader.remove();
    }, 500);
  });
});