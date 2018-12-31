import { html, LitElement } from '@polymer/lit-element';
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
  to: '/evergreen-web-components'
}, {
  label: 'Docs',
  to: '/docs'
}, {
  label: 'Examples',
  to: '/examples'
}];

class app extends connect(store)(LitElement) {
  render() {
    return html`
    <style>
      ${css}
    </style>
      <eve-navigation brand="Project Evergreen" fixed fluid .menu="${menu}"></eve-navigation>
      <lit-route path="/evergreen-web-components/" component="home-page" active=""></lit-route>
      <lit-route path="/evergreen-web-components/docs" component="docs-page"></lit-route>
      <lit-route path="/evergreen-web-components/docs/:id" component="docs-page"></lit-route>
      <!-- <lit-route path="/examples" component="examples-page"></lit-route> -->
    `;
  }
}

customElements.define('eve-app', app);