/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-cinzel)', 'Cinzel', 'serif'],
        body: ['var(--font-lato)', 'Lato', 'sans-serif'],
        cinzel: ['var(--font-cinzel)', 'Cinzel', 'serif'],
        lato: ['var(--font-lato)', 'Lato', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'fadeInDown': 'fadeInDown 0.6s ease-out forwards',
        'scaleIn': 'scaleIn 0.5s ease-out forwards',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
