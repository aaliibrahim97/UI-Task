const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    darkMode: 'class',
    mode: 'jit',
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
        './src/app/app.{html,ts}',
        './src/index.html'
      ],
    theme: {
  
      extend: {},
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/typography'),
    ],
};
