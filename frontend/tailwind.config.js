const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      Offwh: "#fefefa",
      bluehavy: "#28AADC",
      babyblue: "#bbdefb",
    },
    extend: {},
  },
  plugins: [],
});