const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: { content: ["*.html"], enabled: true },
  theme: {
    // here we only keep red color
    colors: {
      red: colors.red,
    },
  },
  variants: {
    appearance: [],
    backgroundColor: [],
    fill: [],
  },
  plugins: [],
};
