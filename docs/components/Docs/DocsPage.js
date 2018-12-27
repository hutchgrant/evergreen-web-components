import { html, LitElement } from '@polymer/lit-element';
import './DocsTable';
import '../../../packages/highlight/src/eve-highlight';
// import github from '../Highlight/themes/github.css';
import qtcreator from '../../../packages/highlight/themes/qtcreator-light.css';

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
        <h2>${title}</h2>
        <p>${description}</p>
        <slot></slot>
        <br />
        <h3>Get Started</h3>
        <eve-highlight type="shell" theme="${qtcreator}" code="${install}"></eve-highlight>
        <br />
        <h3>Usage</h3>
        <eve-highlight type="javascript" theme="${qtcreator}" code="${usage}"></eve-highlight>
        <br />
        ${props ? html`
        <h3>Props</h3>
        <eve-docs-table .items="${props}"></eve-docs-table>
        <br />
        ` : ''}
        ${styleVar
          ? html`
            <h3>Styling</h3>
            <eve-highlight type="css" theme="${qtcreator}" code="${styleVar}"></eve-highlight>
            <br />`
          : ''}

      </div>
    `;
  }
}

customElements.define('eve-docs', DocsPage);