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
      screens: {
        
        'xs': '340px',


        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      extend: {},
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/typography'),
    ],
};
