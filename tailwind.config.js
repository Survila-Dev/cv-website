/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    
    extend: {
      colors: {
        "background": "#475569",
        "box-background": "#94a3b8",
        "button-background": "#15803d", //"#94a3b8",
        "button-background-hover": "#16a34a",//"#64748b",
        "text": "#f8fafc",
        "text-highlight": "#86efac",
        "border-line": "#22c55e",
        "highlight-background": "#406258"
      },
      backgroundImage: {
        "photo-me": "url('../public/Web_Resume_Desktop_Pic.jpg')",

      },
      gridTemplateColumns: {
        "general": "1fr 350px 7fr auto 1fr",
        "project": "1fr 350px 7fr auto 1fr",
        "project-small": "1fr"
      },
      gridTemplateRows: {
        "general": "1fr auto 1fr",
        "project": "1fr auto auto auto auto auto 1fr",
        "contact": "1fr auto auto auto auto auto 1fr",
        "resume": "1fr auto auto auto auto auto auto 1fr"
      },
      keyframes: {
        "fly-from-left": {
          "0%": {
            transform: "translateX(-100px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "100%"
          }
        },
        "fly-from-right": {
          "0%": {
            transform: "translateX(100px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "100%"
          }
        },
        "disappear-to-left": {
          "0%": {
            transform: "translateX(0)",
            opacity: "100%"
          },
          "100%": {
            transform: "translateX(-100px)",
            opacity: "0"
          },
        },
        "disappear-to-right": {
          "0%": {
            transform: "translateX(0)",
            opacity: "100%"
          },
          "100%": {
            transform: "translateX(100px)",
            opacity: "0"
          }
        }
      },
      animation: {
        "come-from-left": "fly-from-left 0.6s ease-in-out forwards",
        "come-from-right": "fly-from-right 0.6s ease-in-out forwards",
        "wait-for-left": "disappear-to-left 0.6s ease-in-out forwards",
        "wait-for-right": "disappear-to-right 0.6s ease-in-out forwards",
      }
    },
    screens: {
      "web": "1500px"
    }
  },
  plugins: [],
}
