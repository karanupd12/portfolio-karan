module.exports = {
  arkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {

      animation: {
        pulse: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.15' },
        },
      },

      utilities: {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-3000': {
          'animation-delay': '3s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
        '.animation-delay-5000': {
          'animation-delay': '5s',
        },

        colors: {
          black: '#000000',
          purple: '#6B46C1',
          white: '#FFFFFF',
          darkBg: "hsl(220, 15%, 5%)", // Almost black
          darkAccent: "hsl(220, 20%, 10%)", // Slightly lighter
          gray: {
            800: '#2D3748',
            700: '#4A5568',
          },
        },
      },
    },
    plugins: [],
  }
};
