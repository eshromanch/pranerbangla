/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderStyle: ['hover'],
    },
    fontFamily: {
      body: ["Noto Serif Bengali"],
      enbody: ["Red Hat Display, sans-serif"]
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1024px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "799px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes:  [
      {'dark': {
        "primary": "#ec1c24",
        "primary-focus": "#570df8",
        "primary-content": "#ffffff",
        "secondary": "#f000b8",
        "secondary-focus": "#bd0091",
        "secondary-content": "#ffffff",
        "accent": "#37cdbe",
        "accent-focus": "#2aa79b",
        "accent-content": "#ffffff",
        "neutral": "#2a2e37",
        "neutral-focus": "#16181d",
        "neutral-content": "#ffffff",
        "base-100": "#3d4451",
        "base-200": "#2a2e37",
        "base-300": "#16181d",
        "base-content": "#ebecf0",
        "info": "#66c6ff",
        "success": "#87d039",
        "warning": "#e2d562",
        "error": "#ff6f6f"
      }},
      {'light': {
        "primary": "#ec1c24",
        "base-100": "#f3f4f6",
      }},
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
