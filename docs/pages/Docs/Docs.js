import { html, LitElement } from '@polymer/lit-element';
import css from './Docs.css';
import '../../components/Docs/DocsList';
import { navigate } from 'lit-redux-router';
import store from '../../store.js';

const demos = [{
  id: 'button',
  label: 'Button',
  component: html`
      <button-docs></button-docs>
    `
}, {
  id: 'card',
  label: 'Card',
  component: html`
      <card-docs></card-docs>
    `
}, {
  id: 'container',
  label: 'Container',
  component: html`
      <container-docs></container-docs>
    `
}, {
  id: 'dropdown',
  label: 'Dropdown',
  component: html`
      <dropdown-docs></dropdown-docs>
    `
}, {
  id: 'highlight',
  label: 'Highlighter',
  component: html`
      <highlighter-docs></highlighter-docs>
    `
}, {
  id: 'navigation',
  label: 'Navigation',
  component: html`
      <navigation-docs></navigation-docs>
    `
}, {
  id: 'row',
  label: 'Row',
  component: html`
      <row-docs></row-docs>
    `
}];

class DocsPage extends LitElement {
  static get properties() {
    return {
      selectDemo: Object,
      id: String
    };
  }

  constructor() {
    super();
    this.selectDemo = {};
  }

  connectedCallback() {
    window.addEventListener('click', this.close.bind(this), false);
  }

  disconnectedCallback() {
    window.removeEventListener('click', this.close.bind(this), false);
  }

  close() {
    if (this.sidebar) {
      this.sidebar.classList.remove('open');
      this.background.classList.remove('open');
      delete this.sidebar;
      delete this.background;
    }
  }

  updated() {
    this.handleSelect(this.id);
  }

  goTo(path) {
    store.dispatch(navigate(path));
  }

  handleSelect(selected) {
    let idx = demos.findIndex(({ id }) => {
      return id === selected;
    });

    this.selectDemo = demos[idx];
  }

  toggleSidebar(e) {
    e.stopPropagation();
    this.sidebar = this.shadowRoot.querySelector('.sidebar-wrapper');
    this.background = this.shadowRoot.querySelector('.sidebar-background');
    this.sidebar.classList.toggle('open');
    this.background.classList.toggle('open');
  }

  renderPage() {
    if (this.selectDemo) {
      return html`
        <div class="page">
          <div class="sidebar-background"><div class="background-shadow"></div></div>
          <div class="sidebar-toggle">
            <eve-button size="md" .onClick="${this.toggleSidebar.bind(this)}">Menu</eve-button>
          </div>
          ${this.selectDemo.component}
        </div>
      `;
    } else {
      return html`
      <div class="page">
        <p>Some component demos and usage</p>
      </div>
      `;
    }
  }
  /* eslint-disable indent */
  render() {
    return html`
      <style>
        ${css}
      </style>

      <div class="sidebar-wrapper" @click="${e => e.stopPropagation()}">
        <div class="sidebar">
          <h4>Components</h4>
          <ul>
            ${demos.map(({ label, id }) => {
              return html`
                <li class="${this.id === id ? 'active' : ''}">
                  <a @click="${() => this.goTo(`/evergreen-web-components/docs/${id}`)}" aria-label="menu-item">${label}</a>
                </li>
              `;
              })}
          </ul>
        </div>
      </div>

      ${this.renderPage()}
    `;
  }
}

customElements.define('docs-page', DocsPage);