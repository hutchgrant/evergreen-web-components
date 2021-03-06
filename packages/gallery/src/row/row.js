import { html, LitElement } from 'lit';

class Row extends LitElement {
  render() {
    return html`
    <style>
      :host {
        margin-left: -0.25rem;
        margin-right: -0.25rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: center;
      }
    </style>
      <slot name="row"></slot>
    `;
  }
}

customElements.define('gallery-row', Row);