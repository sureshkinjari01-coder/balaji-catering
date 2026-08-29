/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FBF1F0',
          100: '#F5DDD9',
          200: '#E9B5AC',
          300: '#D98A7E',
          400: '#C25D4D',
          500: '#A23C2B',
          600: '#7B1E1E',
          700: '#631717',
          800: '#4A1010',
          900: '#2E0A0A',
        },
        saffron: {
          50: '#FEF7E8',
          100: '#FBE9C2',
          200: '#F6D385',
          300: '#F0BC47',
          400: '#E8A33D',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
          800: '#78350F',
          900: '#5C2A0A',
        },
        cream: {
          50: '#FFFCF7',
          100: '#FBF6EE',
          200: '#F5EBD9',
          300: '#EDDABF',
          400: '#E2C79F',
        },
        ink: {
          900: '#1A0F0A',
          800: '#2A1A12',
          700: '#3D2718',
        },
      },
      fontFamily: {
        deva: ['"Tiro Devanagari Hindi"', 'serif'],
        sans: ['"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'fade-in': 'fade-in 1s ease-out both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
