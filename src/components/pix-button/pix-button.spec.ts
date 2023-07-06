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
          <button class="primary">
            HelloPix
          </button>
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
          <button class="primary">
            HelloPix Stencil 'Don't call me a framework' JS
          </button>
          </div>
        </mock:shadow-root>
      </pix-button>
    `);
  });
});
