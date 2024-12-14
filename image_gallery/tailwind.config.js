/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of your template files
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust based on your file structure
    "./public/index.html",
  ],
  // Extend the default Tailwind theme
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        primary: "#1E40AF",
        secondary: "#64748B",
        accent: "#FACC15",
      },
      fontFamily: {
        // Add custom font families here
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        // Add custom spacing values here
        128: "32rem",
        144: "36rem",
      },
    },
  },
};
