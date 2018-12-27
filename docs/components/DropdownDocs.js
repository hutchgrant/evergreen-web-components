import { html, LitElement } from '@polymer/lit-element';
import './Docs/DocsPage';
import '../../packages/dropdown/src/eve-dropdown';

const options = new Array(4).fill(null).map((key, index) => {
  return {
    value: `value${index}`,
    label: `label${index}`
  };
});

const propertyList = [
  { property: 'label',
    description: 'The initial text displayed for the dropdown and at the top of the expanded dropdown.'
  },
  { property: 'options',
    description: 'An array of objects containing value and label properties to display in dropdown.'
  },
  { property: 'optionSelectedCallback',
    description: 'A callback function for when an option is selected. Will be return the value and index of the selected item to the callback function.'
  }
];

const usage = `
import { html, LitElement } from '@polymer/lit-element';
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
    return html\`
      <eve-dropdown label="Options..." .options='\${options}' .optionSelectedCallback="\${this.handleSelection.bind(this)}" ></eve-dropdown>
    \`;
  }
}
customElements.define('my-component', MyComponent);
`;

const styleVariables = `
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
`;

class DropdownDocs extends LitElement {

  handleSelection(value) {
    alert('Selected value: ' + value);
  }

  render() {
    return html`
    <style>
      :host {
        --primary-color: #007f1d;
        --secondary-color: #fff;
        --dropdown-color: var(--primary-color);
        --dropdown-border-color: var(--primary-color);
        --dropdown-text-color: var(--secondary-color);
        --dropdown-text-size: 1rem;
        --dropdown-text-hover-color: var(--secondary-color);
        --dropdown-text-expanded-color: var(--primary-color);
        --dropdown-text-background-hover: var(--primary-color);
        --dropdown-timing: .3s;
      }
    </style>
    <eve-docs
      title="Dropdown"
      description="A styleable select input drop-down list"
      usage=${usage}
      styleVar=${styleVariables}
      install="$ npm i @evergreen-wc/eve-dropdown"
      .props=${propertyList}
      >
        <eve-dropdown label="Options..." .options="${options}" .optionSelectedCallback="${this.handleSelection.bind(this)}" ></eve-dropdown>
    </eve-docs>
   `;
  }
}

customElements.define('dropdown-docs', DropdownDocs);
