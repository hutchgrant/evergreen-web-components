import { html, css, LitElement } from 'lit';
import '../row/row';
import '../card/card';
import '../modal/modal';
import '../carousel/carousel';
import cssStyle from './gallery.css';

const defaultNumImages = 10;

class EveGallery extends LitElement {

  static get styles() {
    return css`
      gallery-card {
        height: 250px;
        padding:3px;
      }
      gallery-carousel {
        display: block;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        height:500px;
        width:750px;
      }
      img {
        width: 100%;
        height:100%;
        object-fit: cover;
      }
      .slide-img {
        width: 100%;
        height:100%;
        object-fit: contain;
      }
      @media(max-width: 500px) {
        gallery-card {
          height: 100%;
          padding:0px;
        }
      }
    `;
  }

  static get properties() {
    return {
      thumbSize: { type: String },
      images: { type: Array },
      carousel: { type: Boolean },
      autoplay: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.thumbSize = 'sm';
    this.carousel = false;
    this.autoplay = false;
    this.images = [];
    this.observer = '';
    this.displayImages = [];
    this.imageCount = 0;
    this.defaultCallbackAlreadyTriggered = false;
    this.showModal = false;
    this.selectedImgIndex = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.fillImages(defaultNumImages);
  }

  firstUpdated() {
    this.sentinel = this.shadowRoot.querySelector('#sentinel');
    this.setObserver();
  }

  fillImages(count) {
    this.imageCount = this.imageCount + count;
    this.displayImages = this.images.slice(0, this.imageCount);
  }

  setObserver() {
    this.observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.intersectionRatio > 0)) {
        // callback is fired immediately on load /bug
        if (this.defaultCallbackAlreadyTriggered) {
          this.fillImages(10);
          let event = new Event('slideschange');

          dispatchEvent(event);
          this.requestUpdate();
        }
        this.defaultCallbackAlreadyTriggered = true;
      }
    });
    this.observer.observe(this.sentinel);
  }

  showCarousel(event) {
    if (this.carousel) {
      this.selectedImgIndex = event.target.id;
      this.selectedImgIndex = this.selectedImgIndex.substr(4, this.selectedImgIndex.length);
      this.showModal = !this.showModal;
      this.requestUpdate();
    }
  }

  renderImages() {
    return this.displayImages.map(({ src }, index) => {
      return html`
        <gallery-card
          slot="row"
          @click="${this.showCarousel}"
          size="${this.thumbSize}">
         <img slot="card" src="${src}" id="img_${index}"/>
        </gallery-card>
      `;
    });
  }

  renderSlides() {
    return this.displayImages.map(({ src }, index) => {
      return html`
        <div class='slide'>
          <img src="${src}" id="slide_img_${index}" class="slide-img"/>
        </div>
      `;
    });
  }

  render() {
    return html`
    <div>
      <eve-modal
        ?show=${this.showModal}
        @modal-closed="${this.showCarousel}">
        <gallery-carousel
          initialSlide="${this.selectedImgIndex}"
         ?autoplay=${this.autoplay}
          speed='2000'
          showArrows
          showIndicators>
          ${this.renderSlides()}
        </gallery-carousel>
      </eve-modal>
      <gallery-row>
        ${this.renderImages()}
      </gallery-row>
      <div id="sentinel"></div>
    </div>
    `;
  }
}

customElements.define('eve-gallery', EveGallery);