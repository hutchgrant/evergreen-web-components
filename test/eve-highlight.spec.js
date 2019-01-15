import { html } from '@polymer/lit-element';
import { render } from 'lit-html';
import '../packages/highlight/src/eve-highlight.js';
import github from '../packages/highlight/themes/github.css';

describe('Highlight Component', () => {
  let highlight, testBed, template;
  let lang = 'xml';
  let code = `
    <p>Hello world</p>
  `;

  describe('Passing multiple attributes', () => {

    beforeEach(async () => {
      testBed = document.createElement('div');
      template = html`
        <eve-highlight type="${lang}" theme="${github}" code="${code}"></eve-highlight>
      `;

      render(template, testBed);
      document.body.appendChild(testBed);
      highlight = testBed.firstElementChild;

      await highlight.updateComplete;
    });

    afterEach(() => {
      highlight.remove();
      highlight = null;
    });

    it('should display the correct formatting for each language', () => {
      let testHighlight = highlight.shadowRoot.querySelector('.hljs');

      expect(testHighlight).toHaveClass(lang);
    });

    it('should display the correct text', () => {
      let testHighlight = highlight.shadowRoot.querySelector('.hljs');

      expect(testHighlight.textContent).toEqual(code);
    });
  });
});