/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctortheme: {
        
              "primary": "#0FCFEC",
                      
              "secondary": "#19D3AE",
                      
              "accent": "#3A4256",
                      
              "success": "#36d399",
                      
              "warning": "#fbbd23",
                      
              "error": "#f87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

