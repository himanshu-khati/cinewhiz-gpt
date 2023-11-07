/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      screens: {
        DEFAULT: "1440px",
      },
    },
  },
  plugins: [],
};
