import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        repute: {
          gold: "#C9A84C",
          sky: "#38BDF8",
          dark: "#06070D",
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fadeUp': 'fadeUp 0.8s cubic-bezier(.16,1,.3,1) both',
        'fadeScale': 'fadeScale 1.2s both',
        'spin-slow': 'spin 60s linear infinite',
        'spin-slow-reverse': 'spin 90s linear infinite reverse',
        'pdot': 'pdot 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeScale: {
          '0%': { opacity: '0', scale: '0.95' },
          '100%': { opacity: '1', scale: '1' },
        },
        pdot: {
          '0%, 100%': { transform: 'translateX(-50%) scale(1)', opacity: '0.15' },
          '50%': { transform: 'translateX(-50%) scale(1.1)', opacity: '0.2' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
