import { html, render } from 'lit';
import '../packages/container/src/eve-container.js';

describe('Container Component', () => {
  let container, testBed, template;
  let text = 'Content padded 15px left and right';

  describe('without attributes', () => {

    beforeEach(async () => {
      testBed = document.createElement('div');
      template = html`
        <eve-container>${text}</eve-container>
      `;

      render(template, testBed);
      document.body.appendChild(testBed);
      container = testBed.firstElementChild;

      await container.updateComplete;
    });

    afterEach(() => {
      container.remove();
      container = null;
    });

    it('should display the slot text', () => {
      const testContainer = container.shadowRoot.querySelector('slot').assignedNodes()[0];

      expect(testContainer.textContent).toEqual(text);
    });

    it('should have the correct width', () => {
      const testContainer = container.shadowRoot.querySelector('div');

      expect(testContainer).toHaveClass('container');
    });
  });
  describe('Passing attribute', () => {
    beforeEach(async () => {
      testBed = document.createElement('div');
      template = html`
        <eve-container fluid>${text}</eve-container>
      `;

      render(template, testBed);
      document.body.appendChild(testBed);
      container = testBed.firstElementChild;

      await container.updateComplete;
    });

    afterEach(() => {
      container.remove();
      container = null;
    });

    it('should have the correct width', () => {
      const testButton = container.shadowRoot.querySelector('div');

      expect(testButton).toHaveClass('container-fluid');
    });

  });
});