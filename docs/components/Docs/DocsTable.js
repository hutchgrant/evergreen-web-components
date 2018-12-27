import { html, LitElement } from '@polymer/lit-element';
import css from './DocsTable.css';

class DocsTable extends LitElement {

  static get properties() {
    return {
      items: {
        type: Array
      }
    };
  }

  /* eslint-disable indent */
  render() {
    return html`
      <style>
        ${css}
      </style>
      <table>
        <thead>
          <th>Property</th>
          <th>Description</th>
        </thead>
        <tbody>
          ${this.items.map(({ property, description }) => {
            return html`
              <tr>
                <td>${property}</td>
                <td>${description}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }
}

customElements.define('eve-docs-table', DocsTable);