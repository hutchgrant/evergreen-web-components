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
  to: '/'
}, {
  label: 'About',
  to: '/about',
  dropdown: [{
    label: 'Dropdown Item 1',
    to: '/demos1'
  }, {
    label: 'Dropdown Item 3',
    to: '/demos2'
  }]
}, {
  label: 'Docs',
  to: '/docs',
  dropdown: [{
    label: 'dropdown item 1',
    to: '/docs1'
  }, {
    label: 'dropdown item 2',
    to: '/docs2'
  }]
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
      <lit-route path="/" component="home-page" active=""></lit-route>
      <lit-route path="/docs" component="docs-page"></lit-route>
      <lit-route path="/docs/:id" component="docs-page"></lit-route>
      <!-- <lit-route path="/examples" component="examples-page"></lit-route> -->
    `;
  }
}

customElements.define('eve-app', app);