const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter var', ...defaultTheme.fontFamily.sans] },
    },
  },
  corePlugins: { preflight: false },
  variants: { extend: {} },
  plugins: [require('@tailwindcss/typography')],
}
