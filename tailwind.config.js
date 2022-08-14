/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
// Settings
const settingsScreens = require('./tailwind.settings.screens');
const settingsFontSizes = require('./tailwind.settings.fontSizes');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        inherit: 'inherit',
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        white: '#FFFFFF',
        candyPurple: '#',
        pageBG: 'var(--pageBG)',
        pageText: 'var(--pageText)',
      },
      borderWidth: {
        10: '10px',
        12: '12px',
      },
    },
  },
  plugins: [],
};
