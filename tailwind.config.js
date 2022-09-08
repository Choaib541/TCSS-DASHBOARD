/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#4b5563",
        white: "#fff",
        transparent: "rgba(0,0,0,0)",
        primary: "rgba(2, 132, 199)",
        background: "#f3f4f6",
        gray: "#f3f4f6",
        success: "#198754",
        danger: "#dc3545",
        warning: "#ffc107",

      },
      fontFamily: {
        'sans': ["Poppins"],
        'serif': ["Poppins"],
        'mono': ["Poppins"],
      }
    },
  },
  plugins: [],
}
