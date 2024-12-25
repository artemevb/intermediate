import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "360px",
      mdx: "460px",
      mdl: "550px",
      slg: "750px",
      lg: "900px",
      xl: "1000px",
      "2xl": "1100px",
      "3xl": "1440px",
      "4xl": "1600px",
      "5xl": "2000px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        corporate: "#FD0002",
        hover_corporate: "#EE787C",
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkOverlay: "rgba(35, 35, 35, 1)", // Добавленный цвет
      },
      backdropBlur: {
        "7.5": "7.5px",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;
