module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#4E2E99",
        "secondary-100": "#4DA3F0",
        "gradient-100": "#EDFFFB",
        "background-100": "#EEF6FE",
      },
      // fontSize: {
      //   xsm: "12px",
      //   xs: "14px",
      //   base: "16px",
      //   sm: "18px",
      //   md: "20px",
      //   lg: "22px",
      //   xl: "24px",
      //   "2xl": "28px",
      //   "3xl": "30px",
      //   "4xl": "36px",
      //   "5xl": "40px",
      //   "6xl": "65px",
      // },
      backgroundImage: {
        "hero-pattern": "url('/img/hero_bg.png')",
      },
      fontFamily: {
        manrope: "Manrope,sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
