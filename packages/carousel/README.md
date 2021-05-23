# eve-carousel

An Evergreen Carousel Web Component

* [Demo](https://hutchgrant.github.io/evergreen-web-components/docs/carousel)

* [Codepen](https://codepen.io/hutchgrant/pen/gOPGaMR)

### Install

```bash
npm i @evergreen-wc/eve-carousel
```

### Usage

```js
import { html, LitElement } from 'lit';
import '@evergreen-wc/eve-carousel';

class MyComponent extends LitElement {
  render() {
    return html`
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
  }
}
customElements.define('my-component', MyComponent);
```

### Props

| Property | Description |
| -------- | ----------- |
| autoplay  | default false. boolean for toggling autoplay of slideshow |
| speed    | Integer for number of ms before slide auto changes |
| initialSlide  | Integer for slide index to display first  |
| showArrows  | show arrow controls for left and right |
| showIndicators   | show indicator circles at bottom for slide number |

### Events

| Event | Description |
| -------- | ----------- |
| slideschange  | listens for whether to reinitalize slides and indicators if more slides loaded (e.g. lazy loaded) |


### Styling

```css
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
```

