/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "40px 20px 70px -30px rgba(0, 0, 0, 0.2)",
        "4xl": "40px 40px 70px -30px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
