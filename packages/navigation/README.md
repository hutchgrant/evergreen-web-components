# eve-dropdown

An Evergreen Navigation Web Component

[Demo](https://hutchgrant.github.io/evergreen-web-components/)

### Install

```bash
npm i @evergreen-wc/eve-navigation
```

### Usage

```js
import { html, LitElement } from '@polymer/lit-element';
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
    return html`
      <eve-navigation brand="My Website" .menu=${menu} fluid></eve-navigation>
    `;
  }
}
customElements.define('my-component', MyComponent);
```

### Props

| Property | Description |
| -------- | ----------- |
| brand    | Main Brand name displayed and linked for the feature application |
| menu     | Main navigation menu array. Each item is an object which contains a label and to(url) keys. First index is default brand link. |
| fluid   | Set container width to 100% of all devices. Otherwise, container width is preset to responsive breakpoints >=1200px, >=992px, >=768px, >=576px, <576px and centered on page |
| fixed   | Set navigation position to fixed at top. |

### Styling

```css
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
```

