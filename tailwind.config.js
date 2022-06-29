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
        pink: '#B6004C',
        'grey-dark': '#6A6A6A'
      },
      backgroundImage: {
        'banner-siec': "url('/banner-siec.svg')",
        'banner-tasa-reciclaje': "url('/banner-tasa-reciclaje.svg')",
        'banner-edificaciones': "url('/banner-edificaciones.svg')"
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1469px',
        // => @media (min-width: 1469px) { ... }

        '2xl': '1920px'
        // => @media (min-width: 1920px) { ... }
      }
    }
  },
  plugins: []
}
