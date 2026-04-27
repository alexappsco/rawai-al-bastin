// module.exports = {
//   content: ["./*.html"],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           50: "#eef8ff",
//           100: "#d8efff",
//           200: "#b9e2ff",
//           300: "#88cfff",
//           400: "#4eb2ff",
//           500: "#2694ff",
//           600: "#0f77f0",
//           700: "#0f60dc",
//           800: "#134fae",
//           900: "#174687"
//         }
//       },
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: '1rem',
//           sm: '2rem',
//           lg: '4rem',
//           xl: '5rem',
//           '2xl': '6rem',
//         },
//         screens: {
//           '2xl': '1272px',
//         },
//       },
//     }
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d8efff",
          200: "#b9e2ff",
          300: "#88cfff",
          400: "#4eb2ff",
          500: "#2694ff",
          600: "#0f77f0",
          700: "#0f60dc",
          800: "#134fae",
          900: "#174687"
        }
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          '2xl': '1272px',
        },
      },

      animation: {
        scroll: 'scroll 25s linear infinite',
        'scroll-reverse': 'scrollReverse 25s linear infinite',
      },

      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    }
  },
  plugins: [],
}