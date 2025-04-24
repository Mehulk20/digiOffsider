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

      boxShadow: {
        inner: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
