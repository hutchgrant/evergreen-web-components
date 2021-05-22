import { html, css, LitElement } from 'lit';

class Modal extends LitElement {

  static get properties() {
    return {
      show: { type: Boolean }
    };
  }

  static get styles() {
    return css`
    .modal {
      position: fixed;
      z-index: 500;
      background-color: white;
      width: 70%;
      border: 1px solid #ccc;
      box-shadow: 1px 1px 1px black;
      padding: 16px;
      z-index:2000;
      left: 15%;
      top: 30%;
      box-sizing: border-box;
      transition: all 0.3s ease-out;
    }
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      width: 100vw;
      height: 100vh;
      background-color: rgb(0 0 0 / 0.5 );
    }
    `;
  }

  disableBackdrop() {
    let close = new Event('modal-closed');

    this.dispatchEvent(close);
  }

  render() {
    const { show } = this;

    return show ? html`
      <div class='modal'>
      <slot></slot>
    </div>
    <div class="backdrop" @click="${() => this.disableBackdrop()}"></div>
    ` :
      html`
        <div></div>
      `;
  }
}

customElements.define('eve-modal', Modal);