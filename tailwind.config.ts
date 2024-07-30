import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          100: "#000000",
          200: "#070707",
        },
        light: {
          900: "#FFFFFF",
          800: "#F5F5F7",
          850: "#CBCBCB",
        },
      },
    },
    backgroundImage: {
      "hero-pattern": "url('/assets/Rectangle.png')",
    },
  },
  plugins: [],
};
export default config;
