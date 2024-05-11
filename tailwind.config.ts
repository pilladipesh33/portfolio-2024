import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bricolage: ["var(--font-bricolage)"],
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
      },
    },
  },
  plugins: [],
};
export default config;
