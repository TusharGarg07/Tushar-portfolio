/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(11 17 32 / <alpha-value>)',
        accent: 'rgb(34 211 238 / <alpha-value>)',
        'accent-secondary': 'rgb(129 140 248 / <alpha-value>)', // Indigo-400
        foreground: 'rgb(255 255 255 / 0.92)',
        muted: 'rgb(255 255 255 / 0.64)',
        border: 'rgb(255 255 255 / 0.10)',
        card: 'rgb(255 255 255 / 0.05)',
        'card-hover': 'rgb(255 255 255 / 0.07)',
      },
      spacing: {
        section: '5rem',
        'section-lg': '6rem',
      },
      boxShadow: {
        glass: '0 10px 30px rgba(0, 0, 0, 0.35)',
        'glass-hover': '0 16px 44px rgba(0, 0, 0, 0.5)',
        'accent-glow': '0 0 20px rgba(34, 211, 238, 0.25)',
        'secondary-glow': '0 0 20px rgba(129, 140, 248, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'gradient-slow': 'gradient 14s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
