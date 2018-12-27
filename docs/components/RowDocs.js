import { html, LitElement } from '@polymer/lit-element';
import './Docs/DocsPage';
import '../../packages/layout/src/row/eve-row';
import '../../packages/layout/src/col/eve-col';
import logo from '../logo.png';

const usage = `
import { html, LitElement } from '@polymer/lit-element';
import '@evergreen-wc/eve-card';
import '@evergreen-wc/layout';

class MyComponent extends LitElement {
  render() {
    return html\`
    <eve-row>
      <eve-card img="\${logo}" size="xs">
        <h1>Example Card</h1>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </eve-card>
      <eve-card img="\${logo}" size="xs">
        <h1>Example Card</h1>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </eve-card>
      <eve-card img="\${logo}" size="xs">
        <h1>Example Card</h1>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </eve-card>
      <eve-card img="\${logo}" size="xs">
        <h1>Example Card</h1>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </eve-card>
    </eve-row>
    \`;
  }
}
customElements.define('my-component', MyComponent);
`;

class RowDocs extends LitElement {

  render() {
    return html`
    <style>
      eve-row{
        border: 4px solid green;
      }
    </style>
    <eve-docs
      title="Row"
      description="A centered flexbox row wrap layout component"
      install="$ npm i @evergreen-wc/layout"
      usage=${usage}
      >
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
    </eve-docs>
    `;
  }
}

customElements.define('row-docs', RowDocs);