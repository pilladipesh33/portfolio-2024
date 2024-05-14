import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // bricolage: "var(--font-bricolage)",
        // bricolage_semi: "var(--font-bricolage-semi)",
        // lora: "var(--font-lora)",
        sans: ["var(--font-bricolage)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xs: "12px",
      md: "14px",
      lg: "18px",
      xl: "1.25rem",
      "2xl": "22px",
      "3xl": "28px",
      "4xl": "36px",
    },
  },
  plugins: [],
};
export default config;
