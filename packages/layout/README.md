# eve-row

Evergreen layout centered, flexbox, row wrap, Web Component

### Install

```bash
npm i @evergreen-wc/eve-layout
```

### Usage

```js
import '@evergreen/layout/eve-row';
import '@evergreen/eve-card';

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