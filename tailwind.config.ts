import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        venus: "#7793BC",
        cloud: "#FFFFFF",
        meteor: "#EEE4DC",
        navy: "#374275",
      },
      fontFamily: {
        heading: ["var(--font-syncopate)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
