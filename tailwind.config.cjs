/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{js, jsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#28282B",
        primary: "#353935",
        accent: "#023020",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  plugins: [],
};
