import { html, LitElement } from 'lit-element';
import css from './Examples.css';

class Examples extends LitElement {
  render() {
    return html`
      <div class="main">
        <h1>Examples</h1>
      </div>
    `;
  }
}

customElements.define('examples-page', Examples);