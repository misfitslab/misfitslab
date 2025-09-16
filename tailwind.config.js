/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // Next.js app dir
    "./pages/**/*.{js,ts,jsx,tsx}", // Next.js pages dir
    "./components/**/*.{js,ts,jsx,tsx}", // Your components
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // ✅ custom font
      },
      colors: {
        brand: {
          DEFAULT: "#1E40AF", // custom brand color (blue-900)
          light: "#3B82F6",   // lighter shade
          dark: "#1E3A8A",    // darker shade
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "slide-up": "slide-up 1s ease-out",
      },
    },
  },
  plugins: [],
}
