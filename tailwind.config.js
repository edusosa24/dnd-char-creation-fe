/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,json}'],
  theme: {
    screens: {
      md: '768px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1840px'
    },
    backgroundImage: {
      'home-signup': "url('/assets/images/bg-signup.jpg')",
      'home-login': "url('/assets/images/bg-login.jpg')",
      profile: "url('/assets/images/bg-profile.jpg')",
      'dnd-logo': "url('/assets/images/dnd-logo.png')",
      'character-form': "url('/assets/images/bg-character-form.jpg')"
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
