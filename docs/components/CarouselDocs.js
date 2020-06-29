import { html, LitElement } from 'lit-element';
import './Docs/DocsPage';
import '../../packages/carousel/src/eve-carousel';

const propertyList = [
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
  }
];

const usage = `
<eve-carousel speed='2000' showIndicators showArrows>
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
    </style>
      <eve-docs
        title="Carousel"
        description="A simple responsive carousel component."
        usage=${usage}
        styleVar=${styleVar}
        install="$ npm i @evergreen-wc/eve-carousel"
        .props=${propertyList}
        >
        <eve-carousel speed='2000' showIndicators showArrows>
          <div class='slide'>Slide 1</div>
          <div class='slide'>Slide 2</div>
          <div class='slide'>Slide 3</div>
        </eve-carousel>
      </eve-docs>
    `;
  }
}

customElements.define('carousel-docs', CarouselDocs);