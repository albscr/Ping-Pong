/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'custom-height': '568px', 
      },
    },
    colors: {
      'dark-blue' : '#001632',
      'medium-blue' : '#1A3066',
      'electric-blue' : '#484DFF',
      'gray-blue' : '#6B6F9A',
      'dark-gray' : '#546681',
      'light-gray' : '#F3F6FB',
      'white' : '#fff'
    },
  },
  plugins: [],
}

