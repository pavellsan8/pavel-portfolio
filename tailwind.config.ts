import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
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
        custom : {
          color_1 : '#161616',
          color_2 : '#222831',
          color_3 : '#31363F',
          color_4 : '#2f456f',
          color_5 : '#5374ac',
          color_6 : '#8bafd0', 
          color_7 : '#eff5fa', 
        },
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        scrollBackground: {
          '0%': { backgroundPosition: 'top' },
          '100%': { backgroundPosition: 'bottom' }
        }
      },
      animation: {
        blink: 'blink 1.5s infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        float: 'float 6s infinite ease-in-out',
        slideUp: 'slideUp 0.5s ease-out forwards',
        scrollBackground: 'scrollBackground 15s linear infinite alternate',
      },
    },
  },
  plugins: [],
} satisfies Config;
