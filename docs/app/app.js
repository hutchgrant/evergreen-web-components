import { html, LitElement } from 'lit';
import css from './app.css';
import '../pages/Home/Home';
import '../pages/Docs/Docs';
import '../../packages/navigation/src/eve-navigation';
import { connectRouter } from 'lit-redux-router';
import store from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

connectRouter(store);

const menu = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Docs',
  to: '/docs'
}];

class app extends connect(store)(LitElement) {
  render() {
    return html`
    <style>
      ${css}
    </style>
      <eve-navigation brand="Project Evergreen" fixed fluid .menu="${menu}"></eve-navigation>
      <lit-route path="/" component="home-page" active=""></lit-route>
      <lit-route path="/docs" component="docs-page"></lit-route>
      <lit-route path="/docs/:id" component="docs-page"></lit-route>
    `;
  }
}

customElements.define('eve-app', app);