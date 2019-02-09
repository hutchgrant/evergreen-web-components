import { html } from 'lit-element';
import { render } from 'lit-html';
import '../packages/button/src/eve-button.js';

describe('Button Component', () => {

  describe('Passing multiple attributes', () => {
    let button, testBed, template;
    const testSize = 'md';
    const url = 'https://www.google.com/';

    const handleClick = () => {
      console.log('button clicked!');
    };

    beforeEach(async () => {
      testBed = document.createElement('div');
      template = html`
        <eve-button size="${testSize}" .onClick="${handleClick}">My Button</eve-button>
      `;

      render(template, testBed);
      document.body.appendChild(testBed);
      button = testBed.firstElementChild;

      await button.updateComplete;
    });

    afterEach(() => {
      button.remove();
      button = null;
    });

    it('should display the slot text', () => {
      const testButton = button.shadowRoot.querySelector('slot').assignedNodes()[0];

      expect(testButton.textContent).toEqual('My Button');
    });

    it('should have the correct width', () => {
      const testButton = button.shadowRoot.querySelector('.btn');

      const size = 'btn-' + testSize;

      expect(testButton).toHaveClass(size);
    });

    it('should add a click handler', () => {
      const testButton = button.shadowRoot.querySelector('.btn');
      const spyEvent = spyOn(testButton, 'click');

      testButton.click();
      expect(spyEvent).toHaveBeenCalled();
    });

    it('should have href when attribute is present', async () => {
      button.remove();
      button = null;

      template = html`
        <eve-button size="${testSize}" href="${url}">My Button</eve-button>
      `;
      render(template, testBed);
      document.body.appendChild(testBed);
      button = testBed.firstElementChild;

      await button.updateComplete;

      const testButton = button.shadowRoot.querySelector('.btn');

      expect(testButton.href).toEqual('https://www.google.com/');
    });
  });
});