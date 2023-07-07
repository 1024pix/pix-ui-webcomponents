export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'components/pix-button',
};

const template = ({first, middle, last}) => {
  return `<pix-button first="${first}" middle="${middle}" last="${last}"></pix-button>`;
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
