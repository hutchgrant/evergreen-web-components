import { html, render } from 'lit';
import '../packages/layout/src/row/eve-row.js';

describe('Row Component', () => {

  describe('Passing multiple attributes', () => {
    let row, testBed, template;
    let text = '<p>hello world</p>';

    beforeEach(async () => {
      testBed = document.createElement('div');
      template = html`
        <eve-row>
          ${text}
        </eve-row>
      `;

      render(template, testBed);
      document.body.appendChild(testBed);
      row = testBed.firstElementChild;

      await row.updateComplete;
    });

    afterEach(() => {
      row.remove();
      row = null;
    });

    it('should display the slot text', () => {
      const testRow = row.shadowRoot.querySelector('slot').assignedNodes()[1];

      expect(testRow.textContent).toEqual(text);
    });
  });
});