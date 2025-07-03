import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#f4f0e8',
        cadetGray: '#88a5a5',
        battleshipGray: '#847a61',
        walnutBrown: '#4f4a3f',
        honeydew: '#E7F1E5',
        cambridgeBlue: '#7B9989',
        mossSoft: '#A7A393',
        warmClay: '#6F6556',
      },
      fontFamily : {
        raleway: ['Raleway', 'sans-serif'],
        libertinusMath: ['Libertinus Math', 'serif'],
        suranna:['Suranna', 'serif']
      }
    },
  },
  plugins: [],
};
export default config;
