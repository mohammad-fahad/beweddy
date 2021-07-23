module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1300px',
    },
    container: { center: true, padding: '1rem' },
    extend: {
      fontFamily: {
        alice: ['Alice', 'serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        'secondary-alternative': '#FFB1B6',
        secondary: '#F178B6',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover', 'group-focus'],
      visibility: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
