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
        }
      },
      animation: {
        flipUp: 'flipUp 0.3s forwards',
        flipDown: 'flipDown 0.3s forwards',
        slideIn: 'slideIn 0.5s forwards',
        bounceSlow: 'bounceSlow 2s infinite',
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
