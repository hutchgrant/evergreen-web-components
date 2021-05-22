import { html, render } from 'lit';
import '../packages/card/src/eve-card.js';
import logo from '../docs/logo.png';

describe('Card Component', () => {
  let card, testBed, template;
  let title = 'Example Card';
  let text = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ';
  let width = 'md';

  describe('Passing multiple attributes', () => {

    beforeEach(async () => {
      testBed = document.createElement('div');
      template = html`
        <eve-card img='${logo}' size='${width}'>
          <h1>${title}</h1>
          <p>${text}</p>
        </eve-card>
      `;

      render(template, testBed);
      document.body.appendChild(testBed);
      card = testBed.firstElementChild;

      await card.updateComplete;
    });

    afterEach(() => {
      card.remove();
      card = null;
    });

    it('should display the slot title text', () => {
      const testCard = card.shadowRoot.querySelector('slot').assignedNodes()[1];

      expect(testCard.textContent).toEqual(title);
    });

    it('should display the slot content text', () => {
      const testCard = card.shadowRoot.querySelector('slot').assignedNodes()[3];

      expect(testCard.textContent).toEqual(text);
    });

    it('should display the attribute img', () => {
      const testCard = card.shadowRoot.querySelector('img');

      expect(testCard.src).toEqual(window.location.origin + logo);
    });

    it('should display the correct size', () => {
      const testCard = card.shadowRoot.querySelector('.card');

      expect(testCard).toHaveClass('card-' + width);
    });
  });
});