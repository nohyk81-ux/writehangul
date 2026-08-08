import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hanji: '#faf8f5',
        muk: '#2c3e50',
        seal: '#e74c3c',
      },
      fontFamily: {
        pen: ['var(--font-nanum-pen)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
