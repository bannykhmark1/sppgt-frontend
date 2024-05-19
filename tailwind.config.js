/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        firewood: "url('../public/image/background-firewood.jpg')",
      },
      width: {
        100: "450px",
        "main": "960px"
      },
      colors: {
        "text-drovishki": "#FEEED7",
        "orange-firewood": "#FBB752",
        "orange-button": "#F06336",
        "orange-border": "#F06336",
        "orange-text": "#F06336",
        "bg-modal": "#363435",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
