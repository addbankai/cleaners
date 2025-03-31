/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Removed incorrect path for Pages Router
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'], // Set Poppins as default sans-serif
        orbitron: ['var(--font-orbitron)'], // Add Orbitron
      },
      // Add any other theme extensions here if needed
    },
  },
  plugins: [],
};
