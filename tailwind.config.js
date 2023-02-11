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
        base: '1.125', // 18px
        md:'1.25rem', // 20px
        lg:"1.375rem",// 22px
        xl:'2rem', //32px
        '2xl':'2.5rem', //40px
        '3xl':'3.5rem', //56px
        '4xl':'6.875rem' //110px
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
          200:'#272727',
          300:'#707070',
          400:'#636468',  
          500:"#212121",
        },
        gray:{
          DEFAULT:"#FCFBF9",
          100:'#F1F2F6',
          200:'#B4BBC6',
          300:'#E1E1E1',
          400:'#E6E6E6',
          500:'#878787',
        },
        skyBlue:{
          DEFAULT:'#00B2ED',
          100: '#EDFAFE',
          200: '#00B2ED',
          300:'#EDFAFE',
        },
        yellow:{
          DEFAULT:"#FEF200",
        },
        green: {
          DEFAULT: "#0CEDAA",
        },
        warning:{
          DEFAULT:"#FFE6D1",
        },
        error:{
          DEFAULT:"#FF0000"
        }
      },
      strokeWidth: {
        '3': '3',
        '4': '4',
       }
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
            maxWidth: '1280px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          '@screen xl': {
            maxWidth: '1280px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        },
        })
      }
  ],
};
