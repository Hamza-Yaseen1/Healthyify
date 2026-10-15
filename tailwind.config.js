
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1B5E20",
        secondary: "#2E7D32",
        accent: "#2D6A4F",
        olive: "#4A5D23",
        ink: "#1B2A1B",
        muted: "#5B6B4F",
        dark: "#1A1A1A",
        grayText: "#666666",
        lightGreen: "#E8F5E9",
        sand: "#E1E5D5",
        mist: "#EEF3E8",
        surface: "#F8F9F6",
        surfaceAlt: "#F3F7F2",
        star: "#F59E0B",
      },
    },
  },
  plugins: [],
};