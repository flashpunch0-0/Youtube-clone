/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackprimary: "#16181b",
        blacksecondary: "#121417",
        bordercolor: "#4c4c4c",
        textcolor: "#b1bdb4",
      },
    },
  },
  plugins: [],
};
