import { html, LitElement } from '@polymer/lit-element';
import css from './eve-navigation.css';

class NavigationComponent extends LitElement {
  static get properties() {
    return {
      fluid: {
        type: Boolean
      },
      fixed: {
        type: Boolean
      },
      brand: {
        type: String
      },
      menu: {
        type: Array
      },
      drawerOpen: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.drawerOpen = false;
  }

  connectedCallback() {
    window.addEventListener('click', this.close.bind(this), false);
  }

  disconnectedCallback() {
    window.removeEventListener('click', this.close.bind(this), false);
  }

  close() {
    if (this.drop) {
      this.drop.classList.remove('open');
      delete this.drop;
    }
    if (this.drawerOpen) {
      this.drawerOpen = false;
    }
  }

  openDropdown(e) {
    if (e.target.parentNode.classList[0] !== 'drop-item') {
      if (this.drop) {
        this.drop.classList.toggle('open');
      }
      if (e.target.parentNode.querySelector('.drop-menu') !== this.drop || !this.drop) {
        e.stopPropagation();
        this.drop = e.target.parentNode.querySelector('.drop-menu');
        this.drop.classList.toggle('open');
      }
    }
  }

  toggleDrawer(e) {
    e.stopPropagation();
    this.drawerOpen = !this.drawerOpen;
  }

  /* eslint-disable indent */
  renderMenu() {
    if (this.menu) {
      return this.menu.map(({ label, to, dropdown }, idx) => {
        if (idx !== 0) {
          if (!dropdown) {
            return html`
              <li><a href=${to}>${label}</a></li>
            `;
          } else {
            return html`
              <li @click="${(e) => this.openDropdown(e)}">
                <a href="#">${label}<span class="caret"></span></a>
                <ul class="drop-menu">
                  ${dropdown.map(({ label, to }) => {
                    return html`
                      <li class="drop-item"><a href=${to}>${label}</a></li>
                    `;
                  })
                }
                </ul>
              </li>
            `;
          }
        }
      });
    }
  }

  render() {
    return html`
      <style>
        ${css}
      </style>

      <nav class=${this.fixed ? 'fixed-top' : ''}>
          <a class="brand" href=${this.menu ? this.menu[0].to : '/'}>${this.brand}</a>
          <button @click="${(e) => this.toggleDrawer(e)}" class="mobile-toggle"><span></span></button>
          <div class="nav-items ${this.drawerOpen ? '' : 'hidden'}">
            <ul class="nav-menu">
              ${this.renderMenu()}
            </ul>
          </div>
      </nav>
    `;
  }
}

customElements.define('eve-navigation', NavigationComponent);
