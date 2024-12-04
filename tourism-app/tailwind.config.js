// tailwind.config.js
/*
Remove unused styles in production. updated the purge option to include vue files.
*/

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // updated the purge option to include vue files.
  darkMode: false, // or 'media' or 'class' 
  theme: {
    extend: {}, // added the extend option to add custom styles
  },
           
  variants: {  // added the variants option to add custom variants
    extend: {}, 
  },
  plugins: [], // added the plugins option to add custom plugins
}