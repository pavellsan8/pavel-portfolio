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
          blue_1 : '#090612',
          blue_2 : '#20153c',
          blue_3 : '#362367',
          blue_4 : '#4d3291',
          blue_5 : '#6340bc',
          blue_6 : '#794ee6',
          blue_7 : '#875CF5',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
