import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: {
          DEFAULT: '#F8F9FB',
          page: '#F8F9FB',
          surface: '#FFFFFF',
          muted: '#F1F3F7',
          hero: '#0F1624',
        },
        text: {
          primary: '#1A1F2E',
          secondary: '#4A5568',
          muted: '#8A94A6',
          inverse: '#FFFFFF',
        },
        accent: {
          blue: '#2B6CB0',
          blueLight: '#EBF4FF',
          navy: '#1E3A5F',
          border: '#E2E8F0',
        },
        // Standard ShadCN compatibility mappings
        primary: {
          DEFAULT: '#2B6CB0',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F1F3F7',
          foreground: '#1A1F2E',
        },
        muted: {
          DEFAULT: '#F1F3F7',
          foreground: '#8A94A6',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: '#E2E8F0',
        input: '#E2E8F0',
        ring: '#2B6CB0',
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200%' },
          '100%': { backgroundPosition: '200%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'shimmer': 'shimmer 1.5s infinite linear',
        'float': 'float 3s ease-in-out infinite',
        'marquee-left': 'marquee-left 25s linear infinite',
        'marquee-right': 'marquee-right 25s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;