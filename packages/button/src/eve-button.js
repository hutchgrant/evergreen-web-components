import { html, LitElement } from '@polymer/lit-element';
import css from './eve-button.css';

class Button extends LitElement {

  static get properties() {
    return {
      href: {
        type: String
      },
      onClick: {
        type: Function
      },
      size: {
        type: String
      }
    };
  }

  /* eslint-disable indent */
  render() {
    const { size, href, onClick } = this;

    return html`
    <style>
      ${css}
    </style>
      ${href
        ? html`
          <a class="btn btn-${size}" href="${href}">
            <slot></slot>
          </a>
          `
        : html `
          <a class="btn btn-${size}" href="#" @click="${onClick}">
            <slot></slot>
          </a>
        `}
    `;
  }
}

customElements.define('eve-button', Button);