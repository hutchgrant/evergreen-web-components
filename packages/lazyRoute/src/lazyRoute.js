import { html, LitElement } from 'lit';
import './Loading';

class lazyRoute extends LitElement {

  static get properties() {
    return {
      loader: {
        type: Object
      }
    };
  }

  loadComponent() {
    if (this.loader.activeRoute === this.loader.path) {
      this.loader.load().then(() => {
        let docs = document.createElement(this.loader.element);
        let litroute = this.shadowRoot.querySelector('lit-route').shadowRoot;

        litroute.replaceChild(docs, litroute.childNodes[2]);
      });
    }
  }

  updated() {
    this.loading = this.loader.loading || 'eve-loading';
    this.loadComponent();
  }

  render() {
    return html`
      <lit-route path="${this.loader.path}" component="${this.loading}"></lit-route>
    `;
  }
}

customElements.define('lazy-route', lazyRoute);