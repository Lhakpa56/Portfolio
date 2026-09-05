/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#E8F0ED",
        surface: "#FFFFFF",
        ink: "#1C2321",
        muted: "#5B6360",
        line: "#DADDD6",
        accent: {
          DEFAULT: "#3A6B63",
          dark: "#2B504A",
          light: "#EAF0EE",
        },
      },
      fontFamily: {
        serif: ["'IBM Plex Serif'", "Georgia", "serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
