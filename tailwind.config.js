/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,json}'],
  theme: {
    screens: {
      md: '768px',
      xl: '1280px',
      '2xl': '1536px'
    },
    backgroundImage: {
      'home-signup': "url('/src/assets/images/bg-signup.jpg')",
      'home-login': "url('/src/assets/images/bg-login.jpg')",
      profile: "url('/src/assets/images/bg-profile.jpg')",
      'dnd-logo': "url('/src/assets/images/dnd-logo.png')"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};
