/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern':
        "radial-gradient(circle, rgba(176, 43, 43, 0.6) 30%, rgba(0, 0, 0, 0.7) 70%), url('assets/qurum_energy_services_cover.jpg')",

        'service-pattern':
        "linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(176, 43, 43, 0.9)), url('assets/bg.jpg')",

        'gallery-pattern1':"url('assets/dummy.jpg')",

        'gallery-pattern2':"url('assets/dummy.jpg')",

        'gallery-pattern3':"url('assets/dummy.jpg')",

        'gallery-pattern4':"url('assets/dummy.jpg')",

        'gallery-pattern5':"url('assets/dummy.jpg')",

        'footer-pattern':
        "linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url('assets/img-7.jpg')",

      },
    },
  },
  plugins: [],
}
