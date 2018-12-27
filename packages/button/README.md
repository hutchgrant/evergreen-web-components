# eve-button

An Evergreen Button Web Component

### Install

```bash
npm i @evergreen/eve-button
```

### Usage

```js
import '@evergreen/eve-button';

class MyComponent extends LitElement {
  handleClick() {
    alert('button clicked!');
  }

  render() {
    return html`
      <eve-button size="md" href="/docs">Example href Button</eve-button>
      <eve-button size="md" .onClick="${this.handleClick.bind(this)}">Example function Button</eve-button>
    `;
  }
}
```

### Props

| Property | Description |
| -------- | ----------- |
| size     | Set size of button. e.g. xs, sm, md, lg |
| href     | Set an anchor to navigate to on click |
| onClick  | Set a function to callback on click |

### Styling

```css
--primary-color: #007f1d;
--secondary-color:#fff;
--btn-background: transparent;
--btn-border-color: var(--primary-color);
--btn-text-color: var(--primary-color);
--btn-hover-background-color: var(--primary-color);
--btn-hover-text-color: var(--secondary-color);
--btn-hover-border-color: var(--primary-color);
--btn-border-radius: 5px
```