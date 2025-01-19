/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(26, 100%, 55%)",
        onPrimary: "hsl(25, 100%, 94%)",

        background: "hsl(223, 64%, 98%)",
        onBackground: "hsl(220, 13%, 13%)",

        surface: "hsl(0, 0%, 100%)",
        onSurface: "hsl(219, 9%, 45%)",

        outline: "hsl(220, 14%, 75%)",
        overlay: "rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
}
