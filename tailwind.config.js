/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2947A9",
        secondary: "#F9995D",
        neutral: {
          50: "#F6F8F7",
          800: "#292E3D",
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
