import { html, LitElement } from 'lit';
import { connectRouter } from 'lit-redux-router';
import { connect } from 'pwa-helpers/connect-mixin.js';
import './Docs/DocsPage';
import '../../packages/lazyRoute/src/lazyRoute';
import '../../packages/button/src/eve-button';
import store from '../store.js';

const propertyList = [
  {
    property: 'loader',
    description: 'Route Object containing a dynamic import function(load), element name(element), url path, and the current activeRoute'
  }
];

const usage = `
import { html, LitElement } from 'lit';
import { connectRouter } from 'lit-redux-router';
import { connect } from 'pwa-helpers/connect-mixin.js';
import '@evergreen-wc/lazyroute';

// Create a redux store see: https://github.com/hutchgrant/evergreen-web-components/blob/master/docs/store.js
import store from './store.js';

// Connect the redux store
connectRouter(store);

class MyComponent extends connect(store)(LitElement) {

  // Initialize activeRoute
  constructor() {
    super();
    this.activeRoute = '';
  }

  // Listen for redux changes
  stateChanged(state) {
    if (state.router.activeRoute !== this.activeRoute) {
      this.activeRoute = state.router.activeRoute;
      super.performUpdate();
    }
  }

  render() {
    // Two lazy route example objects
    const AboutRoute = {
      load: () => import(/* webpackChunkName: "aboutPage" */ '../pages/about/about'),
      element: 'about-page',
      path: '/about',
      activeRoute: this.activeRoute
    };
    const DocsRoute = {
      load: () => import(/* webpackChunkName: "docsPage" */ '../pages/docs/docs'),
      element: 'docs-page',
      path: '/docs',
      loading: 'eve-test', // Optional custom loading component
      activeRoute: this.activeRoute
    };

    return html\`
    <div>
      <!-- Regular lit route -->
      <lit-route path="/" component="home-page"></lit-route>
      <!-- Lazy loaded routes -->
      <lazy-route .loader="\${AboutRoute}"></lazy-route>
      <lazy-route .loader="\${DocsRoute}"></lazy-route>
    </div>
    \`;
  }
}
customElements.define('my-component', MyComponent);


// Modify your babel.config.js to include the following plugins
module.exports = {

  presets: ['@babel/preset-env'],

  plugins: [
    ['babel-plugin-transform-builtin-classes', {
      globals: ['LitElement']
    }],
    '@babel/plugin-syntax-dynamic-import',
  ]
};

// Modify your .eslintrc to contain
{
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  }
}
`;

const install = `
$ npm i @evergreen-wc/lazyroute lit lit-redux-router pwa-helpers redux redux-thunk
$ npm i --save-dev babel-eslint @babel/plugin-syntax-dynamic-import
`;

class LazyDocs extends connect(store)(LitElement) {

  constructor() {
    super();
    this.activeRoute = '';
  }

  stateChanged(state) {
    if (state.router.activeRoute !== this.activeRoute) {
      this.activeRoute = state.router.activeRoute;
      super.performUpdate();
    }
  }

  render() {

    return html`
    <style>
      :host {
        --primary-color: #007f1d;
        --secondary-color:#fff;
        --btn-background: transparent;
        --btn-border-color: var(--primary-color);
        --btn-text-color: var(--primary-color);
        --btn-hover-background-color: var(--primary-color);
        --btn-hover-text-color: var(--secondary-color);
        --btn-hover-border-color: var(--primary-color);
        --btn-border-radius: 5px
      }
    </style>
      <eve-docs
        title="Lazy Loaded Routes"
        description=${`
        Lazyload routes with lit-redux-router<br/><br/>
        <strong>Deprecated: This functionality has now been merged into <a href="https://github.com/fernandopasik/lit-redux-router">lit-redux-router > 0.7.0</a></strong><br/><br/>
        See the bottom of <a href="https://github.com/fernandopasik/lit-redux-router/blob/master/README.md">lit-redux-router's readme.md</a> for more information on using lazy loaded routes.
        `}
        usage=${usage}
        .props=${propertyList}
        install="${install}">
      </eve-docs>
      `;
  }
}

customElements.define('lazy-route-docs', LazyDocs);