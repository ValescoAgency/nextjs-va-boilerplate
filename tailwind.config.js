const {
  colors,
  fontFamily,
  screens,
  spacing
} = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './common/components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '480px',
      '3xl': '1920px',
      ...screens
    },
    extend: {
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite'
      },
      colors: {
        brand: {
          DEFAULT: '#cb9866',
          dark: '#be7e40',
          light: '#d8b28c',
          comp: '#6699cb'
        },
        secondary: {
          DEFAULT: '#1F243F',
          50: '#828CC1',
          100: '#717CB9',
          200: '#515FA6',
          300: '#414B83',
          400: '#303861',
          500: '#1F243F',
          600: '#0E101D',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
        surface: {
          dark: '#0f151d',
          dl0: '#0f151d',
          dl1: '#1b2128',
          dl2: '#20252d',
          dl3: '#22282f',
          dl4: '#252a31',
          dl5: '#292f36',
          dl6: '#2c3138',
          dl7: '#31363d',
          dl8: '#33383f',
          dl9: '#353a41',
          light: 'colors.gray.600'
        },
        va: {
          DEFAULT: '#cb9866'
        },
        gray: colors.coolGray
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans]
      },
      boxShadow: {
        'lg-invert':
          '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300')
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') }
              }
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            }
          }
        }
      }),
      zIndex: {
        '-10': '-10'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' }
        }
      }
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ]
};
