import { html, LitElement } from 'lit-element';

class Loading extends LitElement {
  render() {
    return html`
      <div>
        Loading...
      </div>
    `;
  }
}

customElements.define('eve-loading', Loading);