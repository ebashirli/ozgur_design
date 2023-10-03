/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2947A9",
        secondary: "#F9995D",
        neutral: {
          100: "#ЕОЕЗЕВ",
          200: "#C2C7D6",
          300: "#A3AAC2",
          400: "#858EAD",
          50: "#F6F8F7",
          500: "#667299",
          600: "#525B7A",
          700: "#3D445C",
          800: "#292E3D",
          900: "#14171F",
        },
      },
      // fontFamily: {
      //   sans: ["ui-sans-serif", "system-ui"],
      //   serif: ["ui-serif", "Georgia"],
      //   mono: ["ui-monospace", "SFMono-Regular"],
      //   display: ["Oswald"],
      //   body: ['"Work Sans"'],
      // },
    },
  },
  plugins: [],
};

// #7595FD
// #91A1D4
// #ED6565
// #0B267D
// #000000-70%
// #3559C7
// #C40303
