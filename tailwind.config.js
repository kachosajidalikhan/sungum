/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { borderColor: ['focus'],
      ringColor: ['focus'],},
  },
  plugins: [require("tailwind-scrollbar")],
}