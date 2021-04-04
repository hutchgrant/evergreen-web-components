import { html, LitElement, css, unsafeCSS } from 'lit-element';
import CardCSS from './card.css';

class Card extends LitElement {

  static get properties() {
    return {
      img: {
        type: String
      },
      size: {
        type: String
      }
    };
  }

  static get styles () {
    return css`
    ${unsafeCSS(CardCSS)}
    `;
  }

  renderImage() {
    if (this.img) {
      return html`
        <img src="${this.img}" class="card-img-top" />
      `;
    }
  }

  render() {
    return html`
      <div class="column card ${this.size ? `card-${this.size}` : ''}">
        ${this.renderImage()}
        <div class="body">
          <slot name="card"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('gallery-card', Card);