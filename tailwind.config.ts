import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      fontSize: {
        '14-500': ['14px', { fontWeight: '500', lineHeight: '22px' }],
        '14-600': ['14px', { fontWeight: '600', lineHeight: '22px' }],

        '16-500': ['16px', { fontWeight: '500', lineHeight: '28px' }],
        '16-600': ['16px', { fontWeight: '600' }],
        '16-600-22': ['16px', { fontWeight: '600', lineHeight: '22px' }],
        '16-600-28': ['16px', { fontWeight: '600', lineHeight: '28px' }],

        '18-600': ['18px', { fontWeight: '600', lineHeight: '21px' }],
        '18-600-25': ['18px', { fontWeight: '600', lineHeight: '25px' }],
        '18-600-30': ['18px', { fontWeight: '600', lineHeight: '30px' }],

        '20-500': ['20px', { fontWeight: '500', lineHeight: '30px' }],
        '20-700': ['20px', { fontWeight: '700', lineHeight: '30px' }],
        '21-500': ['21px', { fontWeight: '500', lineHeight: '50px' }],
        '24-600': ['24px', { fontWeight: '600' }],
        '24-600-25': ['24px', { fontWeight: '600', lineHeight: '25px' }],
        '24-700': ['24px', { fontWeight: '700', lineHeight: '32px' }],

        '27-500': ['27px', { fontWeight: '500', lineHeight: '30px' }],
        '27-700': ['27px', { fontWeight: '700', lineHeight: '30px' }],
        '32-700': ['32px', { fontWeight: '700' }],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        purple: {
          5: '#8D68FF',
          10: '#7D4FFF',
          20: '#693CE4',
          30: '#5511D8',
          40: '#4701A9',
        },
        yellow: {
          10: '#FFF2AA',
        },
        gray: {
          10: '#F2F2F2',
          20: '#AEAEB2',
          30: '#8B8B8B',
          40: '#ACACAC',
        },
        black: {
          10: '#0B0B0B',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
