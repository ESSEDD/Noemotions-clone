/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'noemotions-blue': '#2500FF',
      },
      fontFamily: {
        'helvetica': ['Helvetica LT Std', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}