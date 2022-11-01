/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        min: "510px",
      },

      backgroundImage: {
        "gymonebg": "url('/assets/gymone/mainbg.png')"
      }
    },
  },
  plugins: [],
};
