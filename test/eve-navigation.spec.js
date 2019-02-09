import { html } from 'lit-element';
import { render } from 'lit-html';
import '../packages/navigation/src/eve-navigation.js';

describe('Navigation Component', () => {

  describe('Passing multiple attributes', () => {

    let nav, testNav, testBrand, testBed, template;
    let brand = 'My Website';
    const menu = [
      { label: 'Home', to: '/' },
      { label: 'Blog', to: '/blog' },
      { label: 'Portfolio', to: '/',
        dropdown: [
          { label: 'dropdown item 1', to: '/demos1' },
          { label: 'dropdown item 2', to: '/demos2' }
        ]
      },
      { label: 'Photos', to: '/photos' },
      { label: 'Contact', to: '/contact' }
    ];

    beforeEach(async () => {
      testBed = document.createElement('div');
      template = html`
        <eve-navigation brand="${brand}" .menu=${menu} fluid></eve-navigation>
      `;

      render(template, testBed);
      document.body.appendChild(testBed);
      nav = testBed.firstElementChild;

      await nav.updateComplete;

      testNav = nav.shadowRoot.querySelector('.nav-menu');
      testBrand = nav.shadowRoot.querySelector('.brand');
    });

    afterEach(() => {
      nav.remove();
      nav = null;
    });

    it('should display the brand text', () => {
      expect(testBrand.textContent).toEqual(brand);
    });

    it('should link the brand text to the first menu item', () => {

      expect(testBrand.href).toEqual(window.location.origin + menu[0].to);
    });

    it('should display a list of menu items', () => {

      menu.forEach(({ label }, i) => {
        if (i !== 0) {
          expect(testNav.children[i - 1].querySelector('a').textContent).toEqual(label);
        }
      });
    });

    it('should correctly link a list of menu items', () => {
      menu.forEach(({ to, dropdown }, i) => {
        if (i !== 0 && !dropdown) {
          expect(testNav.children[i - 1].querySelector('a').href).toEqual(window.location.origin + to);
        }
      });
    });

    it('should add a click handler', () => {
      const testDropdown = testNav.children[1].querySelector('a');
      const spyEvent = spyOn(testDropdown, 'click');

      testDropdown.click();
      expect(spyEvent).toHaveBeenCalled();
    });

    it('should display a dropdown menu on click', () => {
      testNav.children[1].querySelector('a').click();

      expect(testNav.children[1].querySelector('.drop-menu')).toHaveClass('open');
    });

    it('should collapse on click anywhere else in the window', () => {
      testNav.children[1].querySelector('a').click();

      document.body.click();

      expect(testNav.children[1].querySelector('.drop-menu')).not.toHaveClass('open');
    });

    it('should display the correct dropdown items', () => {
      let item = '';

      testNav.children[1].querySelector('a').click();

      menu[2].dropdown.forEach(({ label, to }, i) => {

        item = testNav.children[1].querySelector('.drop-menu').children[i].querySelector('a');

        expect(item.textContent).toEqual(label);
        expect(item.href).toEqual(window.location.origin + to);
      });

    });

    it('should display menu items when toggled on mobile', async () => {
      let testNav = nav.shadowRoot.querySelector('.mobile-toggle');

      testNav.click();
      await nav.updateComplete;

      let testNavItems = nav.shadowRoot.querySelector('.nav-items');

      expect(testNavItems).not.toHaveClass('hidden');
    });

    it('should collapse mobile menu when anywhere is selected', () => {
      let testNav = nav.shadowRoot.querySelector('.mobile-toggle');
      let testNavItems = nav.shadowRoot.querySelector('.nav-items');

      testNav.click();

      document.body.click();

      expect(testNavItems).toHaveClass('hidden');
    });

    it('should fix to top', async () => {
      nav.remove();
      nav = null;
      template = html`
        <eve-navigation brand="${brand}" .menu=${menu} fixed fluid></eve-navigation>
      `;

      render(template, testBed);
      document.body.appendChild(testBed);
      nav = testBed.firstElementChild;

      await nav.updateComplete;

      let testNav = nav.shadowRoot.querySelector('nav');

      expect(testNav).toHaveClass('fixed-top');
    });
  });
});