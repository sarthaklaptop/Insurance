/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: '#0D4A31',
        secondary: '#F2F2F2',
        // Add more as needed
      },
    },
    fontFamily: {
      GeneralSans: ["General Sans", "sans-serif"]
    }
  },
  plugins: [],
}

