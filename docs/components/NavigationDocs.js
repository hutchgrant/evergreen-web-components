import { html, LitElement } from 'lit';
import './Docs/DocsPage';
import '../../packages/navigation/src/eve-navigation';

const propertyList = [
  {
    property: 'brand',
    description: 'Main Brand name displayed and linked for the feature application'
  },
  {
    property: 'menu',
    description: 'Main navigation menu array. Each item is an object which contains a label and to(url) keys. First index is default brand link.'
  },
  {
    property: 'fluid',
    description: 'Set container width to 100% of all devices. Otherwise, container width is preset to responsive breakpoints >=1200px, >=992px, >=768px, >=576px, <576px and centered on page'
  },
  {
    property: 'fixed',
    description: 'Set navigation position to fixed at top.'
  }
];

const usage = `
import { html, LitElement } from 'lit';

import '@evergreen-wc/eve-navigation';

const menu = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blog' },
  { label: 'Portfolio', to: '/portfolio',
    dropdown: [
      { label: 'dropdown item 1', to: '/demos1' },
      { label: 'dropdown item 2', to: '/demos2' }
    ]
  },
  { label: 'Photos', to: '/photos' },
  { label: 'Contact', to: '/contact' }
];

class MyComponent extends LitElement {
  render() {
    return html\`
      <eve-navigation brand="My Website" .menu=\${menu} fluid></eve-navigation>
    \`;
  }
}
customElements.define('my-component', MyComponent);
`;

const styleVar = `
--primary-color: green;
--secondary-color: #fff;
--nav-background: var(--primary-color);
--nav-brand-text-size: 18px;
--nav-brand-text-color: var(--secondary-color);
--nav-menu-text-color: var(--secondary-color);
--nav-menu-text-size:18px;
--nav-menu-text-hover-color: var(--primary-color);
--nav-menu-text-hover-background: var(--secondary-color);
--nav-menu-drop-hover-background: color(green tint(25%));
`;

const menu = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blog' },
  { label: 'Portfolio', to: '/portfolio',
    dropdown: [
      { label: 'dropdown item 1', to: '#demos1' },
      { label: 'dropdown item 2', to: '#demos2' }
    ]
  },
  { label: 'Photos', to: '/photos' },
  { label: 'Contact', to: '/contact' }
];

class NavigationDocs extends LitElement {
  render() {
    return html`
    <style>
      :host{
        --primary-color: green;
        --secondary-color: #fff;
        --nav-background: var(--primary-color);
        --nav-brand-text-size: 18px;
        --nav-brand-text-color: var(--secondary-color);
        --nav-menu-text-color: var(--secondary-color);
        --nav-menu-text-size:18px;
        --nav-menu-text-hover-color: var(--primary-color);
        --nav-menu-text-hover-background: var(--secondary-color);
      }
    </style>
      <eve-docs
        title="Navigation"
        description="A simple responsive navigation component."
        usage=${usage}
        styleVar=${styleVar}
        install="$ npm i @evergreen-wc/eve-navigation"
        .props=${propertyList}
        >
        <eve-navigation brand="My Site" .menu=${menu} fluid></eve-navigation>
      </eve-docs>
    `;
  }
}

customElements.define('navigation-docs', NavigationDocs);