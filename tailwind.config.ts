import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        brown: {
          '500': 'var(--brown-500)',
        },
        orange: {
          '75': 'var(--orange-75)',
          '100': 'var(--orange-100)',
          '200': 'var(--orange-200)',
          '300': 'var(--orange-300)',
          '400': 'var(--orange-400)',
          '500': 'var(--orange-500)',
          'flare': 'var(--orange-flare)',
        },
        gray: {
          '75': 'var(--gray-75)',
          '100': 'var(--gray-100)',
          '200': 'var(--gray-200)',
          '300': 'var(--gray-300)',
          '400': 'var(--gray-400)',
          '500': 'var(--gray-500)',
        },
        navy: {
          '900': 'var(--navy-900)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'linear-white': 'var(--linear-white)',
        'linear-black-orange': 'var(--linear-black-orange)',
        'linear-gray': 'var(--linear-gray)',
        'linear-soft-gray': 'var(--linear-soft-gray)',
        'linear-orange-gray': 'var(--linear-orange-gray)',
        'linear-orange-black': 'var(--linear-orange-black)',
        'linear-gray-orange': 'var(--linear-gray-orange)',
        'linear-black-orange-hori': 'var(--linear-black-orange-hori)',
        'radial-orange-black': 'var(--radial-orange-black)',
        'linear-orange-red': 'var(--linear-orange-red)',
        'linear-orange-black-vertical': 'var(--linear-orange-black-vertical)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        loadingDots: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.5)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        fade: 'fadeIn 1.0s ease-in-out',
        loadingDots1: 'loadingDots 1s infinite ease-in-out',
        loadingDots2: 'loadingDots 1s infinite ease-in-out 0.2s',
        loadingDots3: 'loadingDots 1s infinite ease-in-out 0.4s',
      },
    },
    fontFamily: {
      'ibm-plex-sans-thai': ['var(--font-ibm-plex-sans-thai)'],
      silom: ['var(--font-silom)'],
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
