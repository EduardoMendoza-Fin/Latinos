/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        crema: "#F8F6F1",
        rojoLatino: "#B22222",
        azulLatino: "#1A3C40"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"]
      }
    }
  },
  plugins: []
};
