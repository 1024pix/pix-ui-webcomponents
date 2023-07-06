import { newE2EPage } from '@stencil/core/testing';

describe('pix-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<pix-button></pix-button>');
    const element = await page.find('pix-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<pix-button></pix-button>');
    const component = await page.find('pix-button');
    const element = await page.find('pix-button >>> div');
    expect(element.textContent).toEqual(`HelloPix `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`HelloPix James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`HelloPix James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`HelloPix James Earl Quincy`);
  });
});
