export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'components/pix-button',
};

const template = (args) => {
  return `<pix-button first="${args.first}" middle="${args.middle}" last="${args.last}"></pix-button>`;
}

export const firstDisplay = template.bind({});
firstDisplay.args = {
  first: 'Jérémie',
  middle: 'Jean',
  last: "Rebecca",
}

export const secondDisplay = template.bind({});
secondDisplay.args = {
  first: 'pouet',
  middle: 'pouet',
  last: "toto",
}
