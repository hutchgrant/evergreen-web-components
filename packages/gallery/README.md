# eve-gallery

An Evergreen Gallery Web Component

[Demo](https://hutchgrant.github.io/evergreen-web-components/docs/gallery)

### Install

```bash
npm i @evergreen-wc/eve-gallery
```

### Usage

```js
import { html, LitElement } from '@polymer/lit-element';
import '@evergreen-wc/eve-gallery';

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

class SomeComponent extends LitElement {
  render() {
    return html`
      <eve-gallery .images="\${images}"/>
    `;
  }
}
customElements.define('some-component', SomeComponent);
```

### Props

| Property | Description |
| -------- | ----------- |
| images     | array of image objects { src: 'image.jpg' } |
| carousel    | default true. toggle carousel visibility on click |