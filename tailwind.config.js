/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern':
        "radial-gradient(circle, rgba(255, 69, 0, 0.5) 30%, rgba(0, 0, 0, 0.7) 70%), url('assets/qurum_energy_services_cover.jpg')",

        'service-pattern':
        "linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.9)), url('assets/img-5.jpg')",

        'gallery-pattern1':"url('assets/img-12.jpg')",

        'gallery-pattern2':"url('assets/img-14.jpg')",

        'gallery-pattern3':"url('assets/img-19.jpg')",

        'gallery-pattern4':"url('assets/img-16.jpg')",

        'gallery-pattern5':"url('assets/img-17.jpg')",

        'footer-pattern':
        "linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url('assets/img-7.jpg')",

      },
    },
  },
  plugins: [],
}
