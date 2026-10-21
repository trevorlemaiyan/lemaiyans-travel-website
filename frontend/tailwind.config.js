/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        desktop: '940px',
      },
      fontWeight: {
        light: 'var(--fw-light)',
        normal: 'var(--fw-regular)',
        medium: 'var(--fw-medium)',
        semibold: 'var(--fw-semibold)',
        bold: 'var(--fw-bold)',
        black: 'var(--fw-black)',
      },
      colors: {
        primary: {
          crimson: '#9B1D20',
          burgundy: '#7D171A',
          light: '#B82428',
          dark: '#7A1619',
        },
        graphite: {
          black: '#1A1A1A',
          dark: '#2D2D2D',
          light: '#4A4A4A',
        },
        warm: {
          white: '#F8F7F5',
          light: '#FAF9F7',
          dark: '#E8E6E1',
        },
        'light-grey': '#D9D9D9',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
