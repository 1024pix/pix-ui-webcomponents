/** @type { import('@storybook/html').Preview } */
import createStyleTags from "./createStyleTags";
import cssVariablesTheme from "@etchteam/storybook-addon-css-variables-theme";

const defaultTheme = createStyleTags(
  "../themes/default-theme/pix-theme-default.scss?inline"
);
const plutoTheme = createStyleTags(
  "../themes/custom-theme/pix-theme-pluto.scss?inline"
);

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    cssVariables: {
      files: {
        "Default Theme": defaultTheme,
        "Pluto Theme": plutoTheme,
      },
      defaultTheme: "Default Theme",
    },
  },
  decorators: [cssVariablesTheme],
};

export default preview;
