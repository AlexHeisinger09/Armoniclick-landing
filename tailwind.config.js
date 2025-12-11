/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        secondary: '#06B6D4',
        accent: '#EC4899',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'spin-reverse-slow': 'spin-reverse 60s linear infinite',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
      },
      keyframes: {
        'spin-reverse': {
          from: {
            transform: 'rotate(360deg)'
          },
          to: {
            transform: 'rotate(0deg)'
          }
        },
        'slideInLeft': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-80px) rotate(-3deg)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotate(-3deg)'
          }
        },
        'slideInRight': {
          '0%': {
            opacity: '0',
            transform: 'translateX(80px) rotate(3deg)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotate(3deg)'
          }
        }
      }
    },
  },
  plugins: [],
}
