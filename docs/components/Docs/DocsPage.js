import { html, LitElement } from 'lit';
import './DocsTable';
import '../../../packages/highlight/src/eve-highlight';
import qtcreator from '../../../packages/highlight/themes/qtcreator-light.css';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

class DocsPage extends LitElement {
  static get properties() {
    return {
      title: String,
      description: String,
      usage: String,
      styleVar: String,
      props: Object,
      install: String
    };
  }
  /* eslint-disable indent */
  render() {
    const { title, description, usage, styleVar, props, install } = this;

    return html`
      <div>
        <div class="summary">
          <h2>${title}</h2>
          <p>${unsafeHTML(description)}</p>
          <slot></slot>
        </div>
        <br />
        <div class="install">
          <h3>Get Started</h3>
          <eve-highlight type="shell" theme="${qtcreator}" code="${install}"></eve-highlight>
          <br />
        </div>
        <div class="usage">
          <h3>Usage</h3>
          <eve-highlight type="javascript" theme="${qtcreator}" code="${usage}"></eve-highlight>
          <br />
        </div>

        ${props ? html`
        <div class="props">
          <h3>Props</h3>
          <eve-docs-table .items="${props}"></eve-docs-table>
          <br />
        </div>
        ` : ''}
        ${styleVar
          ? html`
          <div class="styling">
            <h3>Styling</h3>
            <eve-highlight type="css" theme="${qtcreator}" code="${styleVar}"></eve-highlight>
            <br />
          </div>`
          : ''}

      </div>
    `;
  }
}

customElements.define('eve-docs', DocsPage);