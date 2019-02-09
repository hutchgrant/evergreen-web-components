import { html, LitElement } from 'lit-element';

class Col extends LitElement {

  static get properties() {
    return {
      width: {
        type: String
      }
    };
  }

  render() {
    return html`
    <style>
      :host {
        flex: 0 0 calc((${this.width} / 12)* 100%);
        max-width: calc((${this.width} / 12) * 100%);
        background-color: lightgray;
        border: 1px solid gray;
      }
    </style>
    <slot></slot>
    `;
  }
}

customElements.define('eve-col', Col);