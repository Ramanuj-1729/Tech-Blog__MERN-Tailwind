module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#FF3F59",
      fontColor: "#282750",
      white: "#ffffff",
      gray1: "#e6e6e6",
      gray2: "#a6a6a6",
      gray3: "#333267",
    },
    fontFamily: {
      'poppins': ['"Poppins"', 'sans-serif']
    },
    screens: {
      'smallPhone': '320px', // Phone - portrait
      'largePhone': '480px', // Phone - landscape + portrait
      'smallTablet': '600px', // Small tablet - portrait
      'mediumTablet': '768px', // Large tablet - portrait
      'largeTablet': '1024px', // Large tablet - landscape
      'desktop': '1280px', // Desktop
      'wideScreen': '1440px', // Wide Screen Desktop
    },
  },
  plugins: [],
}
