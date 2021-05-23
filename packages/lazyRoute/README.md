# Evergreen Lazy Routes

**Deprecated: This functionality has now been merged into lit-redux-router > 0.7.0**

**See the bottom of [lit-redux-router's README.md](https://github.com/fernandopasik/lit-redux-router/blob/master/README.md) for more information on using lazy loaded routes.**

Lazyload routes with lit-redux-router

### Install

```bash
$ npm i @evergreen-wc/lazyroute lit-html lit-redux-router pwa-helpers redux redux-thunk
$ npm i --save-dev babel-eslint @babel/plugin-syntax-dynamic-import
```

### Babel

First modify your `babel.config.js` to enable dynamic imports

```js
module.exports = {

  presets: ['@babel/preset-env'],

  plugins: [
    ['babel-plugin-transform-builtin-classes', {
      globals: ['LitElement']
    }],
    '@babel/plugin-syntax-dynamic-import'
  ]
};
```

### ESLint

Modify your `.eslintrc` to contain

```js
{
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  }
}
```

### Usage

Then you can add routes with an object:

```js
const AboutRoute = {
  load: () => import(/* webpackChunkName: "aboutPage" */ '../pages/about/about'),
  element: 'about-page',
  path: '/about',
  activeRoute: this.activeRoute
};
```

with the element:

```js
<lazy-route .loader="${AboutRoute}"></lazy-route>
```

### Full Example


```js
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

    return html`
    <div>
      <!-- Regular lit route -->
      <lit-route path="/" component="home-page"></lit-route>
      <!-- Lazy loaded routes -->
      <lazy-route .loader="${AboutRoute}"></lazy-route>
      <lazy-route .loader="${DocsRoute}"></lazy-route>
    </div>
    `;
  }
}
customElements.define('my-component', MyComponent);
```