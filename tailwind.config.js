/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        foreground: "#000",
        gray: {
          1: "#fafafa",
          2: "#eaeaea",
          3: "#999",
          11: "#666666",
        },
        blue: {
          5: "#0070f3",
        },
        orange: {
          5: "#f5a623",
        },
      },
      backgroundImage: {
        hero: "linear-gradient(180deg,#555,#000)",
        hero_dark: "linear-gradient(180deg,#fff,#adadad)",
        gridline:
          "linear-gradient(to right,rgba(0, 0, 0, .45), rgba(0, 0, 0, .45) 50%, transparent 0, transparent)",
        gridlinevert:
          "linear-gradient(180deg,rgba(0, 0, 0, .45),rgba(0, 0, 0, .45) 50%,transparent 0,transparent)",
        gridlinevertreverse:
          "linear-gradient(180deg,rgba(0, 0, 0, .45),rgba(0, 0, 0, .45) 50%,transparent 0,transparent)",
        noise: "url('/images/noise.png')",
      },
      backgroundColor: {
        nav: "rgb(255 255 255 / 80%)",
      },
      fontSize: {
        sm: "14px",
        subheading: "max(15px,min(2vw,20px))",
        hero: "max(48px,min(5vw,76px))",
      },
      lineHeight: {
        hero: "76px",
      },
      maxWidth: {
        hero: "calc(1234px + 56px * 2)",
        "8xl": "96rem",
        container: "1200px",
      },
      minHeight: {
        hero: "720px",
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
      width: {
        gridline: "calc(100% + 150px)",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(.25, .1, .25, 1)",
      },
      keyframes: {
        grid: {
          "0%": { width: "0%", opacity: "100%" },
          "100%": { width: "calc(100% + 150px)", opacity: "40%" },
        },
        gridvert: {
          "0%": { height: "0%", opacity: "100%" },
          "100%": { height: "calc(100% + 150px)", opacity: "40%" },
        },
        gridvertsmall: {
          "0%": { height: "0%", opacity: "100%" },
          "100%": { height: "calc(100% + 75px)", opacity: "40%" },
        },
        banner: {
          "0%": { height: "0%", opacity: "100%" },
          "100%": { height: "100%", opacity: "40%" },
        },
        opacity: {
          "0%": { opacity: "0%", strokeDashoffset: "10" },
          "100%": { opacity: "100%", strokeDashoffset: "0" },
        },
      },
      animation: {
        grid: "grid 1.08s cubic-bezier(0.645,0.045,0.355,1) forwards",
        gridvert: "gridvert 1.08s cubic-bezier(0.645,0.045,0.355,1) forwards",
        banner: "banner 1.08s cubic-bezier(0.645,0.045,0.355,1) forwards",
        gridvertsmall:
          "gridvertsmall 1.08s cubic-bezier(0.645,0.045,0.355,1) forwards",
        circle: "opacity 1.08s cubic-bezier(0.645,0.045,0.355,1) forwards",
      },
    },
  },
  plugins: [],
};
