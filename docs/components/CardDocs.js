import { html, LitElement } from 'lit-element';
import './Docs/DocsPage';
import '../../packages/card/src/eve-card';
import logo from '../logo.png';

const propertyList = [
  {
    property: 'size',
    description: `Set preset max-width of button. e.g. xs(250px), sm(300px), md(350px).
                  By default, without size attribute, component will fill width of parent`
  },
  {
    property: 'img',
    description: 'Set an image url to fill the top of card'
  }
];

const usage = `
import { html, LitElement } from 'lit-element';
import '@evergreen-wc/eve-card';

class MyComponent extends LitElement {
  render() {
    return html\`
    <eve-card img='\${logo}' size="md">
      <h1>Example Card</h1>
      <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
    </eve-card>
    \`;
  }
}
customElements.define('my-component', MyComponent);
`;

class CardDocs extends LitElement {
  render() {
    return html`
    <style>
      :host {
        --primary-color: #007f1d;
        --secondary-color:#fff;
      }
    </style>
      <eve-docs
        title="Card"
        description="A styled card component"
        usage=${usage}
        install="$ npm i @evergreen-wc/eve-card"
        .props=${propertyList}
        >
        <eve-card img='${logo}' size="md">
          <h1>Example Card</h1>
          <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        </eve-card>
      </eve-docs>
      `;
  }
}

customElements.define('card-docs', CardDocs);