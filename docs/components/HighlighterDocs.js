import { html, LitElement } from '@polymer/lit-element';
import './Docs/DocsPage';
import '../../packages/highlight/src/eve-highlight';
import github from '../../packages/highlight/themes/github.css';

const propertyList = [
  {
    property: 'type',
    description: 'Set the syntax type e.g. html, css, js, xml, bash'
  },
  {
    property: 'theme',
    description: 'Set the imported CSS file.'
  },
  {
    property: 'code',
    description: 'Set the code string to highlight.'
  },
  {
    property: 'hljs',
    description: 'Optionally you may wish to use a language not already registered due to optimization. You can import and register the languages in your own hljs object and add it as an attribute.'
  }
];

const usage = `
import '@evergreen/eve-highlight';
// highlightjs themes https://github.com/highlightjs/highlight.js/tree/master/src/styles
import github from '../Highlight/themes/github.css';

// Javascript example
// Escape $ with \\
const code = \`
class MyComponent extends LitElement {
  constructor() {
    this.name = 'helloworld'
  }

  renderThing() {
    if(this.name === 'helloworld'){
      console.log(this.name)
    }
  }
}
customElements.define('my-component', MyComponent);
\`;

class SomeComponent extends LitElement {
  render() {
    return html\`
      <eve-highlight type="js" theme="\${github}" code="\${code}"></eve-highlight>
    \`;
  }
}
customElements.define('some-component', SomeComponent);
`;

const code = `
// javascript example
class MyComponent extends LitElement {
  constructor() {
    this.name = 'helloworld'
  }

  renderThing() {
    if(this.name === 'helloworld'){
      console.log(this.name)
    }
  }
}
customElements.define('my-component', MyComponent);
`;

class HighlighterDocs extends LitElement {
  render() {
    return html`
      <eve-docs
        title="Syntax Highlighter"
        description="A highlight.js syntax highlighting component"
        usage=${usage}
        install="$ npm i @evergreen/eve-highlight"
        .props=${propertyList}
        >
        <eve-highlight type="javascript" theme="${github}" code="${code}"></eve-highlight>
      </eve-docs>
    `;
  }
}

customElements.define('highlighter-docs', HighlighterDocs);