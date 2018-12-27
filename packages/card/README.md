# eve-card

An Evergreen Card Web Component

### Install

```bash
npm i @evergreen/eve-card
```

### Usage

```js
import '@evergreen/eve-card';

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
| size     | Set preset max-width of button. e.g. xs(250px), sm(300px), md(350px). By default, without size attribute, component will fill width of parent |
| img      | Set an image url to fill the top of card |