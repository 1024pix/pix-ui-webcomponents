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

export const Colors = {
  title: "Buttons",
  render: ({ label, ...args }) => {
    return `<div style="display: flex; gap: 2rem; flex-wrap: wrap"><button
      type="button"
      class="pix-button"
    >
      Bouton default
    </button>
    <button
      type="button"
      class="pix-button pix-button--background-yellow"
    >
      Bouton jaune
    </button>
    <button
      type="button"
      class="pix-button pix-button--background-red"
    >
      Bouton rouge
    </button>
    <button
      type="button"
      class="pix-button pix-button--background-green"
    >
     Bouton vert
    </button>
    <button
      type="button"
      class="pix-button pix-button--background-grey"
    >
    Bouton gris
    </button>
    </div>`;
  },
  args: {
    label: "Bouton"
  }
};
