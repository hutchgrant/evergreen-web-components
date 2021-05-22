import { html, LitElement } from 'lit';

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