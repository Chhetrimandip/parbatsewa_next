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
        bg: '#0d0d0f',
        'bg-soft': '#08080a',
        card: '#353b49',
        'card-2': '#3a4150',
        ink: '#f4f4f5',
        muted: { DEFAULT: '#9a9ba3', 2: '#aeb0b8' },
        faint: '#65666d',
        red: { DEFAULT: '#e11d3a', dark: '#c4172f', soft: '#e8475f' },
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
