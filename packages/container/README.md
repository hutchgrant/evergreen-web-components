# eve-container

An Evergreen Container Web Component

[Demo](https://hutchgrant.github.io/evergreen-web-components/)

### Install

```bash
npm i @evergreen-wc/eve-container
```

### Usage

```js
import { html, LitElement } from '@polymer/lit-element';
import '@evergreen-wc/eve-container';

class MyComponent extends LitElement {
  render() {
    return html`
      <eve-container fluid></eve-container>
    `;
  }
}
customElements.define('my-component', MyComponent);
```

### Props

| Property | Description |
| -------- | ----------- |
| fluid | Set width to 100% of all devices. Otherwise, width is preset to responsive breakpoints >=1200px, >=992px, >=768px, >=576px, <576px |

