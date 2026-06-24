/** @type {import('tailwindcss').Config} */
export default {
  // Toggle dark/light via the `dark` class on <html>
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Brand accent ramp (electric violet -> cyan)
        brand: {
          50: '#eef2ff',
          400: '#8b8cff',
          500: '#7c5cff',
          600: '#6d3bff',
        },
        cyber: {
          cyan: '#22d3ee',
          violet: '#7c5cff',
          pink: '#f472b6',
        },
        // Deep space backgrounds
        ink: {
          950: '#05070f',
          900: '#0a0e1a',
          800: '#11162a',
          700: '#1a2036',
        },
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(124,92,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,92,255,0.08) 1px, transparent 1px)',
        'accent-gradient':
          'linear-gradient(135deg, #7c5cff 0%, #22d3ee 100%)',
        'accent-gradient-soft':
          'linear-gradient(135deg, rgba(124,92,255,0.18) 0%, rgba(34,211,238,0.18) 100%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(124,92,255,0.55)',
        'glow-cyan': '0 0 40px -10px rgba(34,211,238,0.55)',
        glass: '0 8px 32px 0 rgba(0,0,0,0.37)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-25px,20px) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
    },
  },
  plugins: [],
};
