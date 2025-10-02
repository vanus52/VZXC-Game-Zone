document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.querySelector('.preloader');
  const preloaderRow = document.querySelector('.preloader__row');
  
  // Слушаем событие завершения анимации
  preloaderRow.addEventListener('animationend', function() {
    // Добавляем класс для плавного скрытия
    preloader.classList.add('preloader-hide');
    
    // Полностью удаляем прелоадер из DOM после анимации скрытия
    setTimeout(() => {
      preloader.remove();
    }, 500);
  });
});