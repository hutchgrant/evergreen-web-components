import { html, LitElement } from '@polymer/lit-element';
import css from './Home.css';
import logo from '../../logo.png';
import '../../../packages/highlight/src/eve-highlight';
import qtTheme from '../../../packages/highlight/themes/qtcreator-light.css';

class HomePage extends LitElement {
  render() {
    return html`
    <style>
      ${css}
    </style>

    <div class="main">
      <eve-container>
        <div class="marketing">
          <div class="description">
            <h1>Project Evergreen</h1>
            <p>Quickly build modern, dynamic, performant, and <strong>evergreen</strong> web applications.
              By leveraging more of the the web's native capabilities, application's can become more consistent,
              portable, and maintainable. </p>
            <eve-button size="lg" href="/evergreen-web-components/docs">Get Started</eve-button>
          </div>
          <div class="logo">
            <img src="${logo}">
          </div>
        </div>
        <div class="instructions">
            <h3>Quick Install</h3>
            <p>Create new evergreen app</p>
            <eve-highlight type="shell" code="$ npx create-evergreen-app my-app" theme="${qtTheme}"></eve-highlight>
            <p>Change directory to application</p>
            <eve-highlight type="shell" code="$ cd my-app" theme="${qtTheme}"></eve-highlight>
            <p>Start developing!</p>
            <eve-highlight type="shell" code="$ npm start" theme="${qtTheme}"></eve-highlight>
        </div>
      </eve-container>
    </div>
    `;
  }
}

customElements.define('home-page', HomePage);