/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(11 17 32 / <alpha-value>)',
        accent: 'rgb(34 211 238 / <alpha-value>)',
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
      },
    },
  },
  plugins: [],
}
