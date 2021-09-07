module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '400px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1450px',
      xxl: '1700px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xs: '400px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1450px',
      },
    },
    extend: {
      fontFamily: {
        alice: ['Alice', 'serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        'secondary-alternative': '#FCE3EB',
        secondary: '#F178B6',
      },
      transitionTimingFunction: {
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover', 'group-focus'],
      visibility: ['group-hover'],
      width: ['responsive', 'hover', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
