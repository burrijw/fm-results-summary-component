/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        pale: "hsla(360, 100%, 98%)",
        DEFAULT: "hsl(0, 100%, 67%)",
      },
      yellow: {
        pale: "hsl(38, 100%, 98%)",
        DEFAULT: "hsl(39, 100%, 56%)",
      },
      green: {
        pale: "hsl(162, 62%, 97%)",
        DEFAULT: "hsl(166, 100%, 37%)",
      },
      blue: {
        pale: "hsl(221, 100%, 96%)",
        light: "hsl(241, 81%, 54%)",
        DEFAULT: "hsl(234, 85%, 45%)",
      },
      lavender: "hsl(241, 100%, 89%)",
      white: "hsl(0,0%,100%)",
      violet: {
        light: "hsl(252, 100%, 67%)",
        DEFAULT: "hsla(256, 72%, 46%)",
      },
      gray: "hsl(224, 30%, 27%)",
    },
    fontFamily: {
      sans: ["Hanken Grotesk", "Arial", "sans-serif"],
    },
    fontSize: {
      sm: ["1rem", "1.3125rem"],
      base: ["1.125rem", "1.46rem"],
      lg: ["1.5rem", "2rem"],
      xl: ["2rem", "2.625rem"],
      "2xl": ["3.5rem", "4.5rem"],
      "3xl": ["4.5rem", "4.5rem"],
    },
    borderRadius: {
      sm: ".75rem",
      lg: "2rem",
      full: "62.5rem",
    },
    boxShadow: {
      DEFAULT: "0px 30px 60px rgba(61, 108, 236, 0.15)",
    },
    extend: {},
  },
  plugins: [],
};
