// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "border-pulse": {
          "0%": {
            borderColor: "rgb(59, 130, 246, 0)", // blue-500 transparente
          },
          "50%": {
            borderColor: "rgb(59, 130, 246, 1)", // blue-500 sólido
          },
          "100%": {
            borderColor: "rgb(59, 130, 246, 0)", // blue-500 transparente
          },
        },
      },
    },
    animation: {
      "border-pulse": "border-pulse 2s ease-in-out infinite",
    },
  },
  plugins: [],
};
export default config;
