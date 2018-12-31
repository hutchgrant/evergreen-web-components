# eve-card

An Evergreen Card Web Component

[Demo](https://hutchgrant.github.io/evergreen-web-components/)


### Install

```bash
npm i @evergreen-wc/eve-card
```

### Usage

```js
import { html, LitElement } from '@polymer/lit-element';
import '@evergreen-wc/eve-card';

class MyComponent extends LitElement {
  render() {
    return html`
    <eve-card img='${logo}' size="md">
      <h1>Example Card</h1>
      <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
    </eve-card>
    `;
  }
}
customElements.define('my-component', MyComponent);
```

### Props

| Property | Description |
| -------- | ----------- |
| size     | Set preset max-width of card. e.g. xs(250px), sm(300px), md(350px). By default, without size attribute, component will fill width of parent |
| img      | Set an image url to fill the top of card |