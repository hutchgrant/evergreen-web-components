import { html, LitElement } from '@polymer/lit-element';
import './Docs/DocsPage';
import '../../packages/button/src/eve-button';

const propertyList = [
  {
    property: 'size',
    description: 'Set size of button. e.g. xs, sm, md, lg'
  },
  {
    property: 'href',
    description: 'Set an anchor to navigate to on click'
  },
  {
    property: 'onClick',
    description: 'Set a function to callback on click'
  }
];

const usage = `
import '@evergreen/eve-button';

class MyComponent extends LitElement {
  handleClick() {
    alert('button clicked!');
  }

  render() {
    return html\`
      <eve-button size="md" href="/docs">Medium href Button</eve-button>
      <eve-button size="md" .onClick="\${this.handleClick.bind(this)}">Medium function Button</eve-button>
    \`;
  }
}
`;

const styleVar = `
--primary-color: #007f1d;
--secondary-color:#fff;
--btn-background: transparent;
--btn-border-color: var(--primary-color);
--btn-text-color: var(--primary-color);
--btn-hover-background-color: var(--primary-color);
--btn-hover-text-color: var(--secondary-color);
--btn-hover-border-color: var(--primary-color);
--btn-border-radius: 5px
`;

class ButtonDocs extends LitElement {

  handleClick() {
    alert('button clicked!');
  }

  render() {
    return html`
    <style>
      :host {
        --primary-color: #007f1d;
        --secondary-color:#fff;
        --btn-background: transparent;
        --btn-border-color: var(--primary-color);
        --btn-text-color: var(--primary-color);
        --btn-hover-background-color: var(--primary-color);
        --btn-hover-text-color: var(--secondary-color);
        --btn-hover-border-color: var(--primary-color);
        --btn-border-radius: 5px
      }
    </style>
      <eve-docs
        title="Button"
        description="A styled button component"
        usage=${usage}
        .props=${propertyList}
        install="$ npm i @evergreen/eve-button"
        styleVar=${styleVar}
        >
        <eve-button size="lg" href="/docs">Large href Button</eve-button>
        <eve-button size="lg" .onClick="${this.handleClick.bind(this)}">Large function Button</eve-button>
        <br />
        <eve-button size="md" href="/docs">Medium href Button</eve-button>
        <eve-button size="md" .onClick="${this.handleClick.bind(this)}">Medium function Button</eve-button>
        <br />
        <eve-button size="sm" href="/docs">Smaller href Button</eve-button>
        <eve-button size="sm" .onClick="${this.handleClick.bind(this)}">Smaller function Button</eve-button>
        <br />
        <eve-button size="xs" href="/docs">Smallest href Button</eve-button>
        <eve-button size="xs" .onClick="${this.handleClick.bind(this)}">Smallest function Button</eve-button>
      </eve-docs>
      `;
  }
}

customElements.define('button-docs', ButtonDocs);