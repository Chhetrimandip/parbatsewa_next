import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './sanity/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F6FAFF',
        'bg-soft': '#EBF2FC',
        card: '#FFFFFF',
        'card-2': '#EDF4FB',
        ink: '#122040',
        muted: { DEFAULT: '#365070', 2: '#5A7499' },
        faint: '#C8D9EF',
        red: { DEFAULT: '#1B5FAA', dark: '#134A8A', soft: '#D0E4F7' },
        blue: { DEFAULT: '#1B5FAA', soft: '#EEF3FC', border: '#C8D9F0' },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'float-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          from: { transform: 'scale(1.05)' },
          to: { transform: 'scale(1.16)' },
        },
      },
      animation: {
        'float-up': 'float-up 0.9s cubic-bezier(0.2,0.7,0.2,1) forwards',
        kenburns: 'kenburns 22s ease-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
