import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* shadcn-style semantic tokens */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        brand: {
          50:  "#f0f4ff",
          100: "#dce8ff",
          200: "#b5ccff",
          300: "#7da7ff",
          400: "#4478ff",
          500: "#1a4dff",
          600: "#002ef7",
          700: "#0024d4",
          800: "#001fac",
          900: "#001f8a",
        },
        accent: {
          purple: "#a855f7",
          cyan:   "#06b6d4",
          pink:   "#ec4899",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120,119,198,0.3), transparent)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%":      { opacity: "1",   transform: "scale(1.05)" },
        },
      },
      animation: {
        float:       "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
