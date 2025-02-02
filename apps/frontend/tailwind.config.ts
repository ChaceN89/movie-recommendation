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
        primary: "#4A148C",         // Deep, rich purple (base primary)
        "primary-dark": "#370B72",  // Even darker purple
        "primary-darker": "#250753", // Deepest shade of purple
      
        secondary: "#1E1B29",       // Dark slate with a hint of purple
        "secondary-dark": "#15121F", // Even darker variant
        "secondary-darker": "#0E0C17", // Deepest shadow
      
        accent: "#9C27B0",          // Brighter purple accent
        "accent-dark": "#6A1B9A",   // Darker accent variant
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
      zIndex: {
        '5': '5',
        '15': '15',
        '25': '25',
        '35': '35',
        '45': '45',
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
