export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
    this.initRibbon();
  }

  render() {
    let ribbon = document.createElement('div');
    ribbon.classList.add('ribbon');

    ribbon.innerHTML = `
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
        ${this.categories.map(category => `
          <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
        `).join('')}
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `;

    return ribbon;
  }

  initRibbon() {
    this.ribbonInner = this.elem.querySelector('.ribbon__inner');
    this.arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    this.arrowRight = this.elem.querySelector('.ribbon__arrow_right');

    this.arrowRight.addEventListener('click', () => {
      this.ribbonInner.scrollBy(350, 0);
    });

    this.arrowLeft.addEventListener('click', () => {
      this.ribbonInner.scrollBy(-350, 0);
    });

    this.ribbonInner.addEventListener('scroll', () => this.updateArrows());

    requestAnimationFrame(() => this.updateArrows());

    this.ribbonInner.addEventListener('click', (event) => {
      let item = event.target.closest('.ribbon__item');
      if (!item) return;

      event.preventDefault();
      this.selectItem(item);
    });
  }

  updateArrows() {
    let scrollLeft = this.ribbonInner.scrollLeft;
    let scrollWidth = this.ribbonInner.scrollWidth;
    let clientWidth = this.ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;

    if (scrollLeft === 0) {
      this.arrowLeft.classList.remove('ribbon__arrow_visible');
    } else {
      this.arrowLeft.classList.add('ribbon__arrow_visible');
    }

    if (scrollRight < 1) {
      this.arrowRight.classList.remove('ribbon__arrow_visible');
    } else {
      this.arrowRight.classList.add('ribbon__arrow_visible');
    }
  }

  selectItem(item) {
    let activeItem = this.elem.querySelector('.ribbon__item_active');
    if (activeItem) {
      activeItem.classList.remove('ribbon__item_active');
    }

    item.classList.add('ribbon__item_active');

    let event = new CustomEvent('ribbon-select', {
      detail: item.dataset.id,
      bubbles: true
    });

    this.elem.dispatchEvent(event);
  }
}