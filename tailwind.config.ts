import type { Config } from 'tailwindcss'

const config: Config = {
 content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          100: '#455DDC;',
          200: '#F73463;',
          300: '#9646EF;',
          400: '#FF852E;',
          500: '#222631;',
          600: '#2F374C;',
          700: '#727C94;',
          800: '#43D1A7;',
          900: '#A0A9C0;'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
