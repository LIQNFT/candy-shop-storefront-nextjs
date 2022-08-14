/*
 * Tailwind Settings
 */

// Clamp Font Sizing From: https://davidhellmann.com/blog/development/tailwindcss-fluid-typography-with-css-clamp

module.exports = {
  typography: {
    fontSizeMin: 1.125,
    fontSizeMax: 1.25,
    msFactorMin: 1.125,
    msFactorMax: 1.2,
    lineHeight: 1.6,
  },
  screensRem: {
    min: 20,
    sm: 40,
    md: 48,
    lg: 64,
    xl: 80,
    '2xl': 96,
  },
  grid: {
    cols: 24,
  },
};
