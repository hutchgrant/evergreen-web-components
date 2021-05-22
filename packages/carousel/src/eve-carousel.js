/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
import { LitElement, html } from 'lit';
import css from './eve-carousel.css';

class Carousel extends LitElement {
  static get properties() {
    return {
      speed: { type: Number },
      autoplay: { type: Boolean },
      showIndicators: { type: Boolean },
      showArrows: { type: Boolean },
      initialSlide: { type: Number },
      slides: { type: Array }
    };
  }

  constructor() {
    super();
    this.slides = [];
    this.carousel = '';
    this.speed = 2000; // 2 seconds
    this.initialSlide = 0;
    this.autoplay = false;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.slides = this.querySelectorAll('.slide');
    window.addEventListener('slideschange', () => this.setAllSlides(), true);
  }

  setAllSlides() {
    this.slides = this.querySelectorAll('.slide');
    this.requestUpdate();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('slideschange', () => this.setAllSlides());
  }

  firstUpdated() {
    this.carousel = this.shadowRoot.querySelector('.carousel');
    this.initIndicators();
    this.carouselShow(this.initialSlide);
    this.resetTimer();
  }

  initIndicators() {
    this.indicators = this.shadowRoot.querySelectorAll('.indicator');
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].addEventListener('click', this.setSlide(i), true);
      this.indicators[i].setAttribute('data-state', '');
      this.slides[i].setAttribute('data-state', '');

      this.carouselHide(i);
    }
  }

  resetTimer() {
    if (this.autoplay) {
      this.switcher = setInterval(() => {
        this.switchSlide(true);
      }, this.speed);
    }
  }

  updated(changedProperties) {
    changedProperties.forEach(async (oldValue, propName) => {
      if (propName === 'initialSlide' && this.initialSlide) {
        this.setSlide(this.initialSlide)();
      } else if (propName === 'slides') {
        await this.updateComplete;
        this.initIndicators();
        this.carouselShow(this.initialSlide);
      }
    });
  }

  carouselHide(num) {
    this.indicators[num].setAttribute('data-state', '');
    this.slides[num].setAttribute('data-state', '');
    this.slides[num].style.opacity = 0;
  }

  carouselShow(num) {
    this.indicators[num].checked = true;
    this.indicators[num].setAttribute('data-state', 'active');
    this.slides[num].setAttribute('data-state', 'active');
    this.slides[num].style.opacity = 1;
  }

  setSlide(slide) {
    return () => {
      this.initIndicators();
      this.carouselShow(slide);

      // Stop the auto-switcher
      if (this.autoplay) {
        clearInterval(this.switcher);
        this.resetTimer();
      }
    };
  }

  switchSlide(forward) {
    var nextSlide = 0;

    // Reset all slides
    for (var i = 0; i < this.indicators.length; i++) {
      // If current slide is active & NOT equal to last slide then increment nextSlide
      if (this.indicators[i].getAttribute('data-state') === 'active') {
        if (i !== this.slides.length - 1) {
          nextSlide = forward ? i + 1 : i > 0 ? i - 1 : this.slides.length - 1;
        } else {
          nextSlide = forward ? 0 : i - 1;
        }
      }

      // Remove all active states & hide
      this.carouselHide(i);
    }

    // Set next slide as active & show the next slide
    this.carouselShow(nextSlide);
  }

  moveSlide(position) {
    clearInterval(this.switcher);
    this.switchSlide(position > 0);
  }

  renderControls() {
    return html`
      <div class="controls ${this.showArrows ? '' : 'hidden'}">
        <span @click=${() => this.moveSlide(-1)} id='chevronLt'>${chevronLt}</span>
        <span @click=${() => this.moveSlide(1)} id='chevronRt'>${chevronRt}</span>
      </div>
    `;
  }

  renderIndicators() {
    let arr = [];

    for (var i = 0; i < this.slides.length; i++) {
      let active = i === 0 ? 'active' : '';

      arr.push(html`<input class="indicator" name="indicator" data-slide="${i}" data-state="${active}"  type="radio" />`);
    }
    return arr;
  }

  render() {
    return html`
      <style>${css}</style>
      <div class='carousel'>
        <div class='slides'>
          <slot></slot>
        </div>
        <div class="indicators ${this.showIndicators ? '' : 'hidden'}">
          ${this.renderIndicators()}
        </div>
        ${this.renderControls()}
      </div>
    `;
  }
}

customElements.define('eve-carousel', Carousel);

const chevronRt = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <path d="M20 12l-2.83 2.83 9.17 9.17-9.17 9.17 2.83 2.83 12-12z"/>
  <path d="M0 0h48v48h-48z" fill="none"/>
</svg>`;

const chevronLt = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <path d="M30.83 14.83l-2.83-2.83-12 12 12 12 2.83-2.83-9.17-9.17z"/>
  <path d="M0 0h48v48h-48z" fill="none"/>
</svg>`;