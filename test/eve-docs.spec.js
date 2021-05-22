import { html, render } from 'lit';
import '../docs/components/Docs/DocsPage.js';

describe('Docs Page Component', () => {

  describe('Passing multiple attributes', () => {
    let docs, testBed, template;
    const title = 'Test';
    const desc = 'A test component';
    const propertyList = [
      {
        property: 'size',
        description: 'Set size of button. e.g. xs, sm, md, lg'
      }
    ];

    const install = 'npm i @evergreen-wc/eve-button';

    const usage = `
          <eve-button>Hello</eve-button>
    `;

    const styleVar = `
    --primary-color: green;
    `;

    beforeEach(async () => {
      testBed = document.createElement('div');
      template = html`
      <eve-docs
        title=${title}
        description=${desc}
        usage=${usage}
        .props=${propertyList}
        install=${install}
        styleVar=${styleVar}
        >
        ${usage}
      `;

      render(template, testBed);
      document.body.appendChild(testBed);
      docs = testBed.firstElementChild;

      await docs.updateComplete;
    });

    afterEach(() => {
      docs.remove();
      docs = null;
    });

    it('should display the slot usage example', () => {
      const testSlot = docs.shadowRoot.querySelector('slot').assignedNodes()[1];

      expect(testSlot.textContent).toEqual(usage);
    });

    it('should display the title', () => {
      const testTite = docs.shadowRoot.querySelector('.summary > h2');

      expect(testTite.textContent).toEqual(title);
    });

    it('should display the description', () => {
      const testDesc = docs.shadowRoot.querySelector('.summary > p');

      expect(testDesc.textContent).toEqual(desc);
    });

    it('should display a highlight component with the installation', () => {
      const testInstall = docs.shadowRoot.querySelector('.install > eve-highlight').getAttribute('code');

      expect(testInstall).toEqual(install);
    });

    it('should display a highlight component with the usage', () => {
      const testUsage = docs.shadowRoot.querySelector('.usage > eve-highlight').getAttribute('code');

      expect(testUsage).toEqual(usage);
    });

    it('should display a table of acceptable properties', () => {
      const testStyling = docs.shadowRoot.querySelector('.props > eve-docs-table').shadowRoot;
      const tableRow = testStyling.querySelector('table > tbody > tr');

      expect(tableRow.children[0].textContent).toEqual(propertyList[0].property);
      expect(tableRow.children[1].textContent).toEqual(propertyList[0].description);
    });

    it('should display a highlight component with the styling', () => {
      const testStyling = docs.shadowRoot.querySelector('.styling > eve-highlight').getAttribute('code');

      expect(testStyling).toEqual(styleVar);
    });
  });
});