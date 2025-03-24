/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // 如果是 Vite 專案的話
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  }
  