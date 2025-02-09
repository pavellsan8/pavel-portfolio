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
      },
      animation: {
        blink: 'blink 2s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
