import { html, LitElement } from 'lit';
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
  },
  {
    property: 'style',
    description: 'Set a custom stylesheet for a specific button'
  }
];

const usage = `
import { html, LitElement } from 'lit';
import '@evergreen-wc/eve-button';

class MyComponent extends LitElement {
  handleClick() {
    alert('button clicked!');
  }

  render() {
    const style = \`
    :host .btn {
      color: white;
      background-color: red;
    }
    :host .btn:hover {
      color: red;
      background-color: white;
    }
    \`;

    return html\`
    <eve-button size="md" href="/docs" style="\${style}">Medium href Button</eve-button>
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
    let test = `
      :host .btn {
        color: white;
        background-color: red;
      }
      :host .btn:hover {
        color: red;
        background-color: white;
      }
    `;

    let test2 = `
      :host .btn {
        color: white;
        background-color: blue;
      }
      :host .btn:hover {
        color: blue;
        background-color: white;
      }
    `;

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
        install="$ npm i @evergreen-wc/eve-button"
        styleVar=${styleVar}
        >
        <eve-button size="lg" href="/docs" style=${test}>Large href Button</eve-button>
        <eve-button size="lg" .onClick="${this.handleClick.bind(this)}" style=${test2} >Large function Button</eve-button>
        <br />
        <eve-button size="md" href="/docs" color="white" backgroundColor="red">Medium href Button</eve-button>
        <eve-button size="md" .onClick="${this.handleClick.bind(this)}" color="grey" backgroundColor="lightgreen">Medium function Button</eve-button>
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