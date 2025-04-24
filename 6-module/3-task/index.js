import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentIndex = 0;

    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner"></div>
      </div>
    `);

    this.carouselInner = this.elem.querySelector('.carousel__inner');
    this.buttonRight = this.elem.querySelector('.carousel__arrow_right');
    this.buttonLeft = this.elem.querySelector('.carousel__arrow_left');

    
    this.#createSlides();

    // ширина одного слайда 
    this.slideWidth = this.carouselInner.offsetWidth;

    this.updateButtons();
    this.#initCarousel();
  }

  // создаём и добавляем слайды в карусель
  #createSlides() {
    for (const slide of this.slides) {
      const slideElem = createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);

      const addButton = slideElem.querySelector('.carousel__button');
      addButton.addEventListener('click', () => {
        const event = new CustomEvent("product-add", {
          detail: slide.id,
          bubbles: true
        });
        this.elem.dispatchEvent(event);
      });

      this.carouselInner.append(slideElem);
    }
  }

  // видимость стрелок
  updateButtons() {
    const slides = this.carouselInner.querySelectorAll('.carousel__slide');
    const maxIndex = slides.length - 1;

    if (this.currentIndex === 0) {
      this.buttonLeft.style.display = 'none';
    } else {
      this.buttonLeft.style.display = '';
    }

    if (this.currentIndex === maxIndex) {
      this.buttonRight.style.display = 'none';
    } else {
      this.buttonRight.style.display = '';
    }

  }

  // прокручиваем карусель и обновляем стрелки
  #initCarousel() {
    this.buttonRight.addEventListener('click', () => {
      this.currentIndex++;
      this.carouselInner.style.transform = `translateX(-${this.carouselInner.offsetWidth * this.currentIndex}px)`;
      this.updateButtons();
    });

    this.buttonLeft.addEventListener('click', () => {
      this.currentIndex--;
      this.carouselInner.style.transform = `translateX(-${this.carouselInner.offsetWidth * this.currentIndex}px)`;
      this.updateButtons();
    });
  }
}