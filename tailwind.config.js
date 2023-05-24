/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blogPrimary: "#f9f6ee",
        blogSecondary: "#f0ead6",
        blogAccent: "#5d89ba",
        darkBlogP: "#010b13",
        darkBlogS: "#014a81",
      },
    },
  },
};
