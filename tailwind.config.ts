/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0e76fd",
      secondary: "#141416",
      background: "#0a0a0a",
      foreground: "#f5f5f5",
      border: "#2c2c2c",  // Optional border color
      muted: "#9ca3af",    // Muted text color
      accent: "#ff4081",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', "sans-serif"],
        mono: ['var(--font-geist-mono)', "monospace"],
      },
    },
  },
  plugins: [],
};
