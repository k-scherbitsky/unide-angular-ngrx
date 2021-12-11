module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': ['Work Sans' , 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
