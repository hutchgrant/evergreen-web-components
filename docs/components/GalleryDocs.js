import { html, LitElement } from 'lit-element';
import './Docs/DocsPage';
import '../../packages/gallery/src/gallery/gallery';

const propertyList = [
  {
    property: 'images',
    description: 'Array of image strings'
  },
  {
    property: 'carousel',
    description: 'default false. boolean for enabling carousel modal'
  },
  {
    property: 'autoplay',
    description: 'default false. boolean for enabling autoplay in carousel'
  }
];

const images = [
  { src: '/assets/bee-6127510_640.jpg' },
  { src: '/assets/cake-4890393_640.jpg' },
  { src: '/assets/child-6109480_640.jpg' },
  { src: '/assets/concert-5878452_640.jpg' },
  { src: '/assets/daffodils-1316128_640.jpg' },
  { src: '/assets/easter-4945288_640.jpg' },
  { src: '/assets/easter-6035549_640.jpg' },
  { src: '/assets/eggs-3216877_640.jpg' },
  { src: '/assets/field-6109500_640.jpg' },
  { src: '/assets/willow-catkin-2249018_640.png' },
  { src: '/assets/willow-catkin-4949064_640.jpg' },
  { src: '/assets/wood-anemone-4112178_640.jpg' }
];

const usage = `
const images = ${JSON.stringify(images)}

<eve-gallery
  carousel
  autoplay
  .images="\${images}"/>
`;

const styleVar = '';

class GalleryDocs extends LitElement {
  render() {
    return html`
      <eve-docs
        title="Gallery"
        description="A simple gallery component with carousel."
        usage=${usage}
        styleVar=${styleVar}
        install="$ npm i @evergreen-wc/eve-gallery"
        .props=${propertyList}
        >
        <eve-gallery
          carousel
          autoplay
          .images="${images}"/>
      </eve-docs>
    `;
  }
}

customElements.define('gallery-docs', GalleryDocs);