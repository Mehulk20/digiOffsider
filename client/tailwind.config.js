/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontFooter: ["Outfit", "sans-serif"],
        fontPrimary: ["Spinnaker", "sans-serif"],
        fontHeader: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
