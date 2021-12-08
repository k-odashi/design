module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: [ 'Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif' ],
    },
    colors: {
      main: '#0F2D33',
      sub: '#407580',
      back: '#E6F0F2',
      gray: '#F9F9F9'
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/hero-l.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
