/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors: {
      gray: {
        DEFAULT: '#545454',
      },
      beige: {
        DEFAULT: '#FDFDFD',
      },
      green: {
        DEFAULT: '#93a984',
      },
      darkgreen: {
        DEFAULT: '#627754',
      },
      lightgray: {
        DEFAULT: '#dddddd',
      },
      lightgreen: {
        DEFAULT: '#ebefe9',
      },
    fontFamily: {
      'sans' : ['Poppins', 'sans-serif']
    },
    extend: {},
  },
    plugins: [],
  }
}
