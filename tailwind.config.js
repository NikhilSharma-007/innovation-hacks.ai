/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 10%, rgba(0, 0, 0, 0.5) 100%)",
      },
    },
  },
  plugins: [],
};
