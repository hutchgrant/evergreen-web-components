import { html, LitElement } from '@polymer/lit-element';
import './Docs/DocsPage';
import '../../packages/container/src/eve-container';

const propertyList = [
  {
    property: 'fluid',
    description: 'Set width to 100% of all devices. Otherwise, width is preset to responsive breakpoints >=1200px, >=992px, >=768px, >=576px, <576px'
  }
];

const usage = `
import '@evergreen-wc/eve-container';

class MyComponent extends LitElement {
  render() {
    return html\`
      <eve-container fluid></eve-container>
    \`;
  }
}
customElements.define('my-component', MyComponent);
`;

class ContainerDocs extends LitElement {
  render() {
    return html`
    <style>
      :host{
        --primary-color: #007f1d;
        --secondary-color:#fff;
      }

      .outter-container {
        background-color:lightgreen;
      }
      .inner-container {
        padding:10px;
        background-color:white;
        color:black;
      }
    </style>
      <eve-docs
        title="Container"
        description="A page layout container component"
        usage=${usage}
        install="$ npm i @evergreen/eve-container"
        .props=${propertyList}
        >
        <div class="outter-container">
          <eve-container fluid>
            <div class="inner-container">Content padded 15px left and right, width 100% if fluid set or preset breakpoints if not</div>
          </eve-container>
        </div>
      </eve-docs>
    `;
  }
}

customElements.define('container-docs', ContainerDocs);