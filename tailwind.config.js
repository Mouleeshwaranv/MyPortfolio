/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1e293b',
          200: '#121824',
          300: '#0a0d14',
        },
        accent: {
          cyan: '#06b6d4',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        code: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
