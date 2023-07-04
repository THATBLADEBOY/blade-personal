import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        atkinson: ["atkinson", "sans-serif"],
      },
       backgroundImage: {
        "circuit-board": "url('public/svgs/circuit-board.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config

