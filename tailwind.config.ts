import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  important: true,
  mode: 'jit', // Just-In-Time mode is already enabling most optimizations
  theme: {
    extend: {
      backgroundImage: {
        shine: `url("${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/Shine.svg")`,
        hero: `url('${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/hero-image-web.jpg')`,
        mesh: `url('${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/mesh.svg')`,
        banner: `url('${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/festivalbanner.png')`,
        'dark-green-to-transparent': 'linear-gradient(to top, darkgreen, transparent)',
      },
      boxShadow: {
        articleCard: '0 0px 14px 0px rgba(0, 0, 0, 0.15)',
        insetdarkgreen: '-6px -11px 58px 12px rgba(29, 71, 73, 1)'
      },
      keyframes: {
        fade: {
          '0%': {
            opacity: "1",
          },

          '100%': {
            opacity: "0",
          }
        },
        translateLeft: {
          '0%': { transform: 'translateX(100%)' },
          '25%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },

        },
        translateLeftmd: {
          '0%': { transform: 'translateX(150%)' },
          '25%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-150%)' },

        },
      },
      textShadow: {
        'default': '1px  0px 0px rgba(255, 255, 255, 0.2)',
        'md': '0 3px 6px rgba(0, 0, 0, 0.15)',
        'lg': '0 10px 20px rgba(0, 0, 0, 0.25)',
        'xl': '0 20px 40px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        fade_in_out: 'translateLeft 8.2s ease-in-out ',
        fade_in_out_md: 'translateLeftmd 8.2s ease-in-out ',
      }
    },
  },
  plugins: [
    function ({ addUtilities }:{addUtilities:any}) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '1px 0px 0px rgba(255, 255, 255, 0.2)',
        },
        '.text-shadow-md': {
          textShadow: '0 3px 6px rgba(0, 0, 0, 0.15)',
        },
        '.text-shadow-lg': {
          textShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-xl': {
          textShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
        },
        // Add more custom text-shadow utilities here
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  // Ensure unused styles are purged in production builds
  purge: ['./src/**/*.{js,ts,jsx,tsx,html}'], // Adjust if your file paths differ
}

export default withMT(config);