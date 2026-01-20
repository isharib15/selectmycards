/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f1c3a',
          950: '#051a2d',
        },
        sapphire: '#0d47a1',
        sapphire_light: '#5b8dd4',
        platinum: '#d4d9e8',
      },
      backgroundImage: {
        'gradient-sapphire': 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)',
      },
    },
  },
  plugins: [],
};
