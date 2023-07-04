export default {
  title: "Button",
  render: ({ label, ...args }) => {
    return `<button
      type="button"
      class="pix-button"
    >
      ${label}
    </button>`;
  },
};

export const Default = {
  args: {
    label: "Default button",
  },
};
