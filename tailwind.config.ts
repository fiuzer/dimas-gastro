import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        graphite: '#1A1A1A',
        bone: '#F8F6F2',
        linen: '#E9E4DA',
        copper: '#B87544',
        gold: '#C9A05B'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'ui-sans-serif', 'system-ui'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui']
      },
      keyframes: {
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        floatUp: 'floatUp 600ms ease-out forwards',
        shimmer: 'shimmer 6s ease-in-out infinite alternate'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 30px 70px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
};

export default config;