module.exports = {
  arkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        purple: '#6B46C1',
        white: '#FFFFFF',
        gray: {
          800: '#2D3748',
          700: '#4A5568',
        },
      },
    },
  },
  plugins: [],
};
