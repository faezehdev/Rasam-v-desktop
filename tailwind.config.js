/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './**/*.{html,js}',
    './css/**/*.css',
    './js/**/*.js',
  
  ],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'darkGray':'#4C515A',
      'black':'#000000',
      'darkGray2':'#26272B',
      'Gray':'#A8B0BA',
      'Orange':'#f9920b',
      'White':'#ffff',
      'black1':'#161617',
      'main':'#F9920B',
      'nGray':'#A8B0BA',
      'blackT':'#161617',
      'midGray':'#6D6E73',
      'darkGray':'#4C515A',
      'cGray':'#26272B',
      'liGray':'#A1A3A9',
      'lightGray':'#E9EAED',
     
      'white':'#ffff',
      'f':'#ffff',
      'black2':'#121213',
        
    },
    fontFamily: {
      'IranYekan300': ['IranYekan300', 'IranYekan300'],
      'IranYekan400': ['IranYekan400', 'IranYekan400'],
      'IranYekan500': ['IranYekan500', 'IranYekan500'],
      'IranYekan700': ['IranYekan700', 'IranYekan700'],
      'IranYekan900': ['IranYekan900', 'IranYekan900'],
      'IRANSansWeb300': ['IRANSansWeb300', 'IRANSansWeb300'],
      'IRANSansWeb400': ['IRANSansWeb400', 'IRANSansWeb400'],
      'IRANSansWeb500': ['IRANSansWeb500', 'IRANSansWeb500'],
      'IRANSansWeb700': ['IRANSansWeb700', 'IRANSansWeb700'],
      'IRANSansWeb900': ['IRANSansWeb900', 'IRANSansWeb900'],
      'AnjomanMax400': ['AnjomanMax400', 'AnjomanMax400'],
      'AnjomanMax600': ['AnjomanMax600', 'AnjomanMax600'],
    
        
    },
  
    
  
    extend: {
      spacing: {
        '1.5': '1.5em',
        
      },
      lineHeight: {
        '18.78': '18.78px',
        '64': '64px',
        '23':'23px',
        '25.4':'25.04px',
        '57.97':'57.97px',
        '48.36': '48.36px',
        '17.96': '17.96px',
        '21.91': '21.91px',
        '32.03':'32.03px',
        '56.35':'56.35px',
        '25.04':'25.04px',
        '37.97':'37.97px',
        '34.55':'37.57px',
        '31.03':'31.03px',
        '28.17':'28.17px',
        '18.78':'18.78px',
         '20.25':'20.25px',
         '24':'24px',
         '46.96':'46.96px',
         '16.41':'16.41px',
         '14.06':'14.06px',
         '30':'30px',
         '31.09':'31.09px',
         '21':'21px',
         '21.97':'21.97px',
         '20.73':'20.73px',
         '41.45':'41.45px',
         '24.18':'24.18px',
         '27.64':'27.64px',
       

      },

      width:{
        '85p':'85%',
        '90p':'90%',
      },
      maxWidth: {
        'x100': '100%',
      },
      fontSize: {
        'f1':'20px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',

      }
    },
    translate: {
      '100': '-100%',
    }
  },
  
  
}