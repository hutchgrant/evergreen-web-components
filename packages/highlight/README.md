# eve-highlight

An Evergreen Highlight.js Web Component

### Install

```bash
npm i @evergreen-wc/eve-highlight
```

### Usage

```js
import '@evergreen-wc/eve-highlight';

// highlightjs themes https://github.com/highlightjs/highlight.js/tree/master/src/styles
import github from '@evergreen-wc/eve-highlight/themes/github.css';

// Javascript example
// Escape $ with \
const code = `
class MyComponent extends LitElement {
  constructor() {
    this.name = 'helloworld'
  }

  renderThing() {
    if(this.name === 'helloworld'){
      console.log(this.name)
    }
  }
}
customElements.define('my-component', MyComponent);
`;

class SomeComponent extends LitElement {
  render() {
    return html`
      <eve-highlight type="js" theme="${github}" code="${code}"></eve-highlight>
    `;
  }
}
customElements.define('some-component', SomeComponent);
```

### Props

| Property | Description |
| -------- | ----------- |
| type     | Set the syntax type e.g. html, css, js, xml, bash |
| theme    | Set the imported CSS file. |
| code     | Set the code string to highlight. |
| hljs     | Optionally you may wish to use a language not already registered due to optimization. You can import and register the languages in your own hljs object and add it as an attribute. |