/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/IMG_20240212_204539_HDR.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }

    },
  },
  plugins: [],
}
