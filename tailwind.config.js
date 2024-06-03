/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        flipUp: {
          '0%': { transform: 'rotateX(0)', opacity: 1 },
          '100%': { transform: 'rotateX(90deg)', opacity: 0 },
        },
        flipDown: {
          '0%': { transform: 'rotateX(-90deg)', opacity: 0 },
          '100%': { transform: 'rotateX(0)', opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pageTransition: {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', backgroundColor: '#ffffff' },
          '25%': { clipPath: 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)', backgroundColor: '#FCCDD3' },
          '50%': { clipPath: 'polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)', backgroundColor: '#FCCDD3' },
          '75%': { clipPath: 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)', backgroundColor: '#FCCDD3' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', backgroundColor: '#ffffff' },
        },
      },
      animation: {
        flipUp: 'flipUp 0.3s forwards',
        flipDown: 'flipDown 0.3s forwards',
        slideIn: 'slideIn 0.5s forwards',
        bounceSlow: 'bounceSlow 2s infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        pageTransition: 'pageTransition 1s forwards',
      },
      boxShadow: {
        'custom': '4px 4px 0 0 #422800',
        'custom-active': '2px 2px 0 0 #422800',
      },
      colors: {
        'button-bg': '#fbeee0',
        'button-border': '#422800',
        'button-text': '#422800',
        'button-hover': '#ffffff',
      },
      borderRadius: {
        'xl': '30px',
      },
    },
  },
  plugins: [],
};