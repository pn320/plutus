/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#000",
        gray: {
          2: "#eaeaea",
          11: "#666666",
        },
      },
      backgroundImage: {
        hero: "linear-gradient(180deg,#555,#000)",
        hero_dark: "linear-gradient(180deg,#fff,#adadad)",
      },
      backgroundColor: {
        nav: "rgb(255 255 255 / 80%)",
      },
      fontSize: {
        sm: "14px",
        hero: "max(48px,min(5vw,76px))",
      },
      lineHeight: {
        hero: "76px",
      },
      maxWidth: {
        hero: "calc(1234px + 56px * 2)",
        "8xl": "96rem",
      },
      boxShadow: {
        nav: "inset 0 -1px 0 0 #eaeaea",
      },
      backdropSaturate: {
        nav: "180%",
      },
      backdropBlur: {
        nav: "5px",
      },
    },
  },
  plugins: [],
};
