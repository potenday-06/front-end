import type { Config } from 'tailwindcss'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const pxToRem = require('tailwindcss-preset-px-to-rem')

export default {
  presets: [pxToRem],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        '24-600': ['24px', { fontWeight: '600' }],
        '27-500': ['27px', { fontWeight: '500' }],
        '27-700': ['27px', { fontWeight: '700' }],
        '32-700': ['32px', { fontWeight: '700' }],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        purple: {
          10: '#7D4FFF',
          20: '#5511D8',
        },
        yellow: {
          10: '#FFF2AA',
        },
        gray: {
          10: '#F2F2F2',
          20: '#AEAEB2',
          30: '#8B8B8B',
        },
        black: {
          10: '#0B0B0B',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
