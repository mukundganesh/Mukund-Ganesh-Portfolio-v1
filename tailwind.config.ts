import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        page: "#0f0e0c",
        surface: "#1a1815",
        textPrimary: "#fff4e6",
        textMuted: "#e4d7c7",
        accent: "#ff9b42",
        accent2: "#ffd369",
      },
    },
  },
  plugins: [],
};

export default config;

