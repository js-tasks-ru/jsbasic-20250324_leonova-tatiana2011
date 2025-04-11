function initCarousel() {
  const button_right = document.querySelector('.carousel__arrow_right');
  const button_left = document.querySelector('.carousel__arrow_left');
  const carousel__inner = document.querySelector('.carousel__inner');
  const width = carousel__inner.offsetWidth;
  const slides = document.querySelectorAll('.carousel__slide');
  let currentIndex = 0;
  let maxIndex = slides.length - 1;
  button_left.style.display = 'none';

  function updateButtons() {
  if (currentIndex === 0) {
    button_left.style.display = 'none';
  } else {
    button_left.style.display = '';
  }

  if (currentIndex === maxIndex) {
    button_right.style.display = 'none';
  } else {
    button_right.style.display = '';
  }
  }

  button_right.addEventListener('click', (event) => { 
    if (currentIndex < maxIndex) {
      currentIndex++;
      carousel__inner.style.transform = `translateX(-${currentIndex * width}px)`;
      updateButtons();
    } 
  });

  button_left.addEventListener('click', (event) => { 
    if (currentIndex > 0) {
      currentIndex--;
      console.log(currentIndex);
      carousel__inner.style.transform = `translateX(-${currentIndex * width}px)`;
      updateButtons();
    } 
  });
  // ваш код...
}
