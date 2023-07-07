import combine from "postcss-combine-duplicated-selectors";

export default {
  plugins: [combine({ removeDuplicatedProperties: true })],
};
