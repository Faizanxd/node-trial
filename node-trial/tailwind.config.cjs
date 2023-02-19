/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        newyellow: "rgb(240, 167, 9)",
        brown: "rgb(48, 42, 31)",
        morebrown: "rgb(139, 100, 8)",
        lightbrown: "rgb(245, 222, 173)",
        background: "rgb(250, 237, 208)",
        dark: "hsl(0deg, 0%, 8%)",
        netflixRed: "#e50a14",
        textbrown: "rgb(202, 158, 62)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  },
};
