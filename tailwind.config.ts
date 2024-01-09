/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DB4444",
        "primary-light": "#E3F2FF",
        secondary: "#50AE31",
        "secondary-light": "#E6F4E2",
        defaults: "#FFFFFF",
        tertiary: "#F9B80A",
        error: "#E30613",
        layout: "#F8F8F8",
      },

      // borderRadius: {
      //   layout: ".75rem",
      // },
      // boxShadow: {
      //   "main-content":
      //     "0px 0.9800000190734863px 3.930000066757202px 0px #00000040",
      // },
      // screens: {
      //   mdMax: { max: "768px" },
      // },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [],
};
