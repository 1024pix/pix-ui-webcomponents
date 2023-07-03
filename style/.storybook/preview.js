/** @type { import('@storybook/html').Preview } */

import '../style.scss';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: 'basic',
      list: [
        { name: 'basic', color: '#3d68ff' },
        { name: 'test', class: 'pix-theme-test', color: 'gold' },
      ],
    },
  },
};

export default preview;
