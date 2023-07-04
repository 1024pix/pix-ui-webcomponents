/** @type { import('@storybook/html').Preview } */

import "../style.scss";

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
      default: "basic",
      list: [
        { name: "basic", color: "gold" },
        { name: "test", class: "pix-theme-pluto", color: "#556bcc" },
      ],
    },
  },
};

export default preview;
