/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#580B57",
        secondary: "#D3D3D3",
        tertiary: "#390739",
        ctcPrimary: "#580B57",
        ctcSecondary: "#c73938",
        textPrimary: "#ffffff",
        textSecondary: "#580B57",
      },
      fontSize: {
        "2xl": "1.75rem", 
      },
      fontFamily: {
        custom: ["Nunito", "sans-serif"], // Specify font-family for body, h1, h2, h3, etc.
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"], // Enable the 'active' variant for background colors
    },
  },
  plugins: [],
};