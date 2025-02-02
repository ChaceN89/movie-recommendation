import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}", // ✅ Only scan relevant files
    "!../../packages/ui/node_modules" // ✅ Exclude node_modules
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D086A",
        "primary-dark": "#1D0446",
        "primary-darker": "#170436", 
      
        secondary: "#055B85",
        "secondary-dark": "#022C41",
        "secondary-darker": "#022232", 
      
        accent: "#880030",
        "accent-dark": "#5A0020",
        "accent-darker": "#450018",
      },

      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'chalkduster': ['Chalkduster', 'cursive'],
        'wingdings': ['Wingdings', 'cursive'], 
        'mangold': ['Mangold', 'sans-serif'],
        'techead': ['Techead', 'sans-serif'],
        'sharung': ['Sharung', 'sans-serif'],
        'baddest': ['Baddest', 'sans-serif'],
        'mageri': ['Mageri', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'], 
        'bebas-neue': ['Bebas Neue', 'sans-serif'], 
      },
    },
    typography: {
      DEFAULT: {
        css: {
          h1: {
            fontSize: "2.5rem", // 40px
            fontWeight: "700",
            color: "theme(colors.primary)",
            fontFamily: "theme(fontFamily.montserrat)",
          },
          h2: {
            fontSize: "2rem", // 32px
            fontWeight: "600",
            color: "theme(colors.primary-dark)",
            fontFamily: "theme(fontFamily.montserrat)",
          },
          h3: {
            fontSize: "1.75rem", // 28px
            fontWeight: "600",
            color: "theme(colors.primary-darker)",
            fontFamily: "theme(fontFamily.nunito)",
          },
          h4: {
            fontSize: "1.5rem", // 24px
            fontWeight: "500",
            color: "theme(colors.secondary)",
            fontFamily: "theme(fontFamily.lato)",
          },
          h5: {
            fontSize: "1.25rem", // 20px
            fontWeight: "500",
            color: "theme(colors.secondary-dark)",
            fontFamily: "theme(fontFamily.poppins)",
          },
          h6: {
            fontSize: "1rem", // 16px
            fontWeight: "500",
            color: "theme(colors.secondary-darker)",
            fontFamily: "theme(fontFamily.poppins)",
          },
          p: {
            fontSize: "1rem", // 16px
            fontWeight: "400",
            color: "theme(colors.accent-dark)",
            fontFamily: "theme(fontFamily.roboto)",
            lineHeight: "1.75",
          },
        },
      },
    },

  },
  plugins: [require("daisyui")],
} satisfies Config;
