const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColors = require('./src/styles/themes/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter var', ...defaultTheme.fontFamily.sans] },
    },
    colors: { ...defaultColors },
  },
  corePlugins: { preflight: false },
  variants: { extend: {} },
  plugins: [require('@tailwindcss/typography')],
}
