/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'rich-black': '#161616',
        'blue-ocean': '#5165A9',
        'blue-dark': '#253C6D',
        'blue-light': '#84CDE4',
        'blue-2': '#04659B',
        'blue-3': '#20A1CE',
        'blue-4': '#243B6C',
        'blue-5': '#BBC8F6',
        'blue-6': '#A0B3F3',
        'blue-green': '#2293A5',
        pink: '#B6004C',
        'grey-dark': '#6A6A6A',
        yellow: '#FFD000',
        green: '#169150',
        'green-2': '#01743D',
        'green-3': '#8FC89B',
        purple: '#4E4896',
        'purple-2': '#662482'
      },
      backgroundImage: {
        'banner-siec': "url('/banner-siec.svg')",
        'banner-edificaciones': "url('/banner-edificaciones.svg')"
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1366px',
        // => @media (min-width: 1366px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }

        lim: '1467px'
        // => @media (min-width: 1467px) { ... }
      }
    }
  },
  plugins: []
}
