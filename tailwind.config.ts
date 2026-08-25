import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: "#1F1424", // near-black plum — primary dark/text color
          900: "#2A1B31",
          800: "#3B2545",
          700: "#4F3059",
          600: "#6B3F73",
        },
        rose: {
          600: "#D91E63", // hot pink — primary accent
          500: "#EE4B84",
          400: "#F786AC",
          300: "#FBB4CB",
          200: "#FCD3E0",
          100: "#FDE9EF",
        },
        gold: {
          600: "#B8860B",
          500: "#D4A017",
          400: "#E7BE4E",
        },
        cream: "#FFF8F5", // warm paper background
        ink: "#241726", // body copy on light sections
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 25% 20%, rgba(238,75,132,0.16), transparent 45%), radial-gradient(circle at 80% 70%, rgba(212,160,23,0.14), transparent 50%)",
        "section-glow":
          "radial-gradient(circle at 90% 10%, rgba(238,75,132,0.08), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
