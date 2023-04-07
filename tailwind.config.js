/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee:  'marquee 60s linear infinite reverse',
        marquee2: 'marquee 70s linear infinite reverse',
        marquee3: 'marquee 80s linear infinite',
        marquee4: 'marquee 90s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-65%)' },
        },
      },
    },
  },
  plugins: [],
}

