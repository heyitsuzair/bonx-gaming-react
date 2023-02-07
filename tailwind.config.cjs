/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        secondary: "rgb(var(--color-secondary)/<alpha-value>)",
        "secondary-90": "rgb(var(--color-secondary-90)/<alpha-value>)",
        "secondary-70": "rgb(var(--color-secondary-70)/<alpha-value>)",
        primary: "rgb(var(--color-primary)/<alpha-value>)",
      },
    },
  },
  plugins: [],
};
