import { html, LitElement } from 'lit-element';
import css from './eve-container.css';

class container extends LitElement {
  static get properties() {
    return {
      fluid: {
        type: Boolean
      }
    };
  }

  render() {
    return html`
      <style>
      ${css}
      </style>
      <div class=${this.fluid ? 'container-fluid' : 'container'}>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('eve-container', container);
