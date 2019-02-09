// Based on the work from https://github.com/kcmr/code-sample

import { LitElement } from 'lit-element';
import hljs from 'highlight.js/lib/highlight';
import css from './eve-highlight.css';
import defaultTheme from '../themes/default.css';

// Reminder optimization reduce build size, build for specific languages
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));

class Highlighter extends LitElement {
  static get properties() {
    return {
      code: {
        type: String
      },
      theme: {
        type: String
      },
      type: {
        type: String
      },
      hljs: {
        type: Object
      }
    };
  }

  connectedCallback() {
    this.hljs = this.hljs || hljs;
    this.style();
    this.highlight(this.code);
  }

  style() {
    let style = document.createElement('style');

    style.innerHTML = css + (this.theme ? this.theme : defaultTheme);
    this.shadowRoot.appendChild(style);
  }

  highlight(str) {
    // create new pre element
    let pre = document.createElement('pre');
    let code = document.createElement('code');

    // add type to class list
    if (this.type) {
      code.classList.add(this.type);
    }

    /// clean code
    code.innerHTML = this.entitize(str);

    // append pre element
    pre.appendChild(code);
    this.shadowRoot.appendChild(pre);

    // apply highlighting
    hljs.highlightBlock(code);
  }

  cleanIndentation(str) {
    const pattern = str.match(/\s*\n[\t\s]*/);

    return str.replace(new RegExp(pattern, 'g'), '\n');
  }

  entitize(str) {
    return String(str)
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/=""/g, '')
      .replace(/=&gt;/g, '=>')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

customElements.define('eve-highlight', Highlighter);
