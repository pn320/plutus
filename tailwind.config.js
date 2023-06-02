/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //   fontFamily: {
      //     serif: ["Basis Grotesque"],
      //   },
      colors: {
        gray: {
          10: "#666666",
          11: "#eaeaea",
        },
      },
      backgroundImage: {
        hero: "linear-gradient(180deg,#555,#000)",
        hero_dark: "linear-gradient(180deg,#fff,#adadad)",
      },
      fontSize: {
        hero: "76px",
      },
      lineHeight: {
        hero: "76px",
      },
      maxWidth: {
        "8xl": "96rem",
      },
    },
  },
  plugins: [],
};
