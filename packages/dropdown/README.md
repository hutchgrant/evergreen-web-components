# eve-dropdown

An Evergreen Dropdown Web Component

[Demo](https://hutchgrant.github.io/evergreen-web-components/docs/dropdown)

### Install

```bash
npm i @evergreen-wc/eve-dropdown
```

### Usage

```js
import { html, LitElement } from 'lit';
import '@evergreen-wc/eve-dropdown';

const options = [
  { value: 'value1', label: 'label1'},
  { value: 'value2', label: 'label2'},
  { value: 'value3', label: 'label3'},
];

class MyComponent extends LitElement {
  handleSelection(value, idx) {
    console.log('selected', value);
    console.log('index', idx);
  }

  render() {
    return html`
      <eve-dropdown label="Options..." .options='${options}' .optionSelectedCallback="${this.handleSelection.bind(this)}" ></eve-dropdown>
    `;
  }
}
customElements.define('my-component', MyComponent);
```

### Props

| Property | Description |
| -------- | ----------- |
| label    | The initial text displayed for the dropdown and at the top of the expanded dropdown. |
| options  | An array of objects containing value and label properties to display in dropdown.
| optionSelectedCallback | A callback function for when an option is selected. Will be return the value and index of the selected item to the callback function. |

### Styling

```css
/* Example style */
--primary-color: #41a6ef;
--secondary-color: #fff;
--dropdown-color: var(--primary-color);
--dropdown-border-color: var(--primary-color);
--dropdown-text-color: var(--secondary-color);
--dropdown-text-size: 1rem;
--dropdown-text-hover-color: var(--secondary-color);
--dropdown-text-expanded-color: var(--primary-color);
--dropdown-text-background-hover: var(--primary-color);
--dropdown-timing: .3s;
```

