/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        md:'1.25rem', // 20px
        lg:"1.375rem",// 22px
        xl:'2rem', //32px
        xxl:'2.5rem', //40px
        xxl:'6.875rem', //110px
      },
      fontFamily: {
        body: ['Overpass'],
        display: ['Overpass'],
      },
      colors: {
        primary: '#00B2ED',
        black: {
          DEFAULT: '#000000',
          100:'#001515',
        },
        gray:{
          DEFAULT:"#FCFBF9",
        },
        skyBlue:{
          DEFAULT:'#00B2ED',
        },
      },
    },
  },
  plugins: [
    function({addComponents}) {
      addComponents ({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',

          '@screen sm': {
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          '@screen md': {
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          '@screen lg': {
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          '@screen xl': {
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        },
        })
      }
  ],
};
