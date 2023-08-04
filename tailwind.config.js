/** @type {import('tailwindcss').Config} */
module.exports = {
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
        signature: ["'Unna', serif"],
      },
      colors: {
        primary: "#4D4F48",
        secondary: "#141A0F",
        background: "#fafafa",
        white: "#ffffff",
        black: "#000000",
        green: "#5C9735",
        light: "#F4F6F3",
        pale: "#C6D8C0",
        gray: "#EAE9EC",
        "dark-gray": "#757575",
        "light-gray": "#DDDDDD",
        "manual-gray": "#646467",
        "light-purple": "#362596",
      },
    },
  },
  plugins: [],
};
