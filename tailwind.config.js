/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      yellow: {
        DEFAULT: '#DBAC2C',
        light: '#F1E9C9',
        dark: '#C47F17'
      },
      purple: {
        DEFAULT: '#8047F8',
        light: '#EBE5F9',
        dark: '#4B2995'
      },
      base: {
        background: '#FAFAFA',
        white: '#FFFFFF',
        card: '#F3F2F2',
        input: '#EDEDED',
        button: '#E6E5E5',
        hover: '#D7D5D5',
        label: '#8D8686',
        text: '#574F4D',
        subtitle: '#403937',
        title: '#272221'
      }
    },
    fontFamily: {
      display: ['Baloo 2'],
      body: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      'title-xs': ['1.125rem', '1.3rem'],
      'title-s': '1.25rem',
      'title-m': '1.5rem',
      'title-l': '2rem',
      'title-xl': '3rem',
      }
    },
  plugins: [],
}

