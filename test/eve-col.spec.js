import { html } from '@polymer/lit-element';
import { render } from 'lit-html';
import '../packages/layout/src/col/eve-col.js';

describe('Col Component', () => {

  describe('Passing multiple attributes', () => {
    let col, testBed, template;
    let text = '<p>hello world</p>';

    beforeEach(async () => {
      testBed = document.createElement('div');
      template = html`
        <eve-col>
          ${text}
        </eve-col>
      `;

      render(template, testBed);
      document.body.appendChild(testBed);
      col = testBed.firstElementChild;

      await col.updateComplete;
    });

    afterEach(() => {
      col.remove();
      col = null;
    });

    it('should display the slot text', () => {
      const testCol = col.shadowRoot.querySelector('slot').assignedNodes()[1];

      expect(testCol.textContent).toEqual(text);
    });
  });
});