import { html, LitElement } from 'lit';
import './Docs/DocsPage';
import '../../packages/carousel/src/eve-carousel';

const propertyList = [
  {
    property: 'autoplay',
    description: 'default false. Boolean for autoplaying slides'
  },
  {
    property: 'initialSlide',
    description: 'Integer for slide index to show first'
  },
  {
    property: 'speed',
    description: 'Integer for number of ms before slide auto changes'
  },
  {
    property: 'showArrows',
    description: 'show arrow controls for left and right'
  },
  {
    property: 'showIndicators',
    description: 'show indicator circles at bottom for slide number'
  },
  {
    property: 'slideschange',
    description: 'Event. Notify carousel to reinit if slotted slides changed (e.g. lazy load)'
  }
];

const usage = `
<eve-carousel
  autoplay
  initialSlide="${0}"
  speed='2000'
  showIndicators
  showArrows>
    <div class='slide'>Slide 1</div>
    <div class='slide'>Slide 2</div>
    <div class='slide'>Slide 3</div>
</eve-carousel>
`;

const styleVar = `
  eve-carousel {
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    height:500px;
    width:750px;
  }
  .slide {
    background-color:red;
  }
`;

class CarouselDocs extends LitElement {
  render() {
    return html`
    <style>
      eve-carousel {
        display: block;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        height:500px;
        width:750px;
      }
      .slide {
        background-color:red;
      }
    </style>
      <eve-docs
        title="Carousel"
        description="A simple responsive carousel component."
        usage=${usage}
        styleVar=${styleVar}
        install="$ npm i @evergreen-wc/eve-carousel"
        .props=${propertyList}
        >
        <eve-carousel autoplay speed='2000' initialSlide="${0}" showIndicators showArrows>
          <div class='slide'>Slide 1</div>
          <div class='slide'>Slide 2</div>
          <div class='slide'>Slide 3</div>
        </eve-carousel>
      </eve-docs>
    `;
  }
}

customElements.define('carousel-docs', CarouselDocs);