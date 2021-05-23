# eve-row

Evergreen layout centered, flexbox, row wrap, Web Component

[Demo](https://hutchgrant.github.io/evergreen-web-components/docs/row)

### Install

```bash
npm i @evergreen-wc/eve-layout
```

### Usage

```js
import { html, LitElement } from 'lit';
import '@evergreen-wc/layout/eve-row';
import '@evergreen-wc/eve-card';

class MyComponent extends LitElement {
  render() {
    return html`
    <eve-row>
      <eve-card img="${logo}" size="xs">
        <h1>Example Card</h1>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </eve-card>
      <eve-card img="${logo}" size="xs">
        <h1>Example Card</h1>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </eve-card>
      <eve-card img="${logo}" size="xs">
        <h1>Example Card</h1>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </eve-card>
      <eve-card img="${logo}" size="xs">
        <h1>Example Card</h1>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </eve-card>
    </eve-row>
    `;
  }
}
customElements.define('my-component', MyComponent);
```