/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cinewhiz: "#5DA93C",
      },
    },
    container: {
      screens: {
        DEFAULT: "1440px",
      },
    },
  },
  plugins: [],
};
