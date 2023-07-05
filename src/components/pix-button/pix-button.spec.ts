import { newSpecPage } from '@stencil/core/testing';
import { PixButton } from './pix-button';

describe('pix-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PixButton],
      html: '<pix-button></pix-button>',
    });
    expect(root).toEqualHtml(`
      <pix-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </pix-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PixButton],
      html: `<pix-button first="Stencil" last="'Don't call me a framework' JS"></pix-button>`,
    });
    expect(root).toEqualHtml(`
      <pix-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </pix-button>
    `);
  });
});
