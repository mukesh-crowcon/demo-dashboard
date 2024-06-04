/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "560px",
        md: "760px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1420px",
        "3xl": "1600px",
      },

      // tailwind default:
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px',

      colors: {
        "c-red-1": "#D91544",
        "c-orange": "#F9A11C",
        "c-green": "#54CD98",
        "c-blue": "#2767A4",
        "c-dark-blue-1": "#0F1B2E",
        "c-dark-blue-2": "#1B4373",
        "c-light-blue-1": "#EAF1F6",
        "c-light-blue-2": "#DDE8F2",
        "c-white": "#FFFFFF",
        "c-red-dark": "#82122D", // same as c-red-3
        "c-red-light": "#FFC9DE",
        "c-green-light": "#D5EDE2",

        "c-red-2": "#B9123A",
        "c-red-3": "#82122D",
        "c-dark-blue-3": "#0F1B2E",
        "c-dark-blue-4": "#0E2444",

        "c-light-blue-3": "#DEE8F2",
        "c-light-blue-4": "#CEDCEB",
        "c-light-gray-1": "#8B9AAC",

        // Colours for cal due status in table (from Figma)
        "c-green-1": "#D7EDD3",
        "c-green-2": "#D3EDE8",
        "c-green-3": "#E4DEC8",
        "c-blue-1": "#C9CEFF",
        // red light and red-1 already in earlier table colours
        "custom-1": "#67b7dc",
        "custom-2": "#a367dc",

        "custom-3": "#48d3ff", // dark - 3293b2 (Turquoise)
        "custom-4": "#ffc12d", // dark - b2871f (Gold)
        "custom-5": "#ff5636", // dark - b23c25 (Red)
      },
      spacing: {
        15: "15px",
        18: "18px",
        26: "26px",
        52: "52px",
        74: "74px",
        86: "86px",
        137: "137px",
        155: "155px",
        203: "203px",
        210: "210px",
        218: "218px",
        244: "244px",
        298: "298px",
        312: "312px",
        316: "316px",
        348: "348px",
        363: "363px",
        370: "370px",
        420: "420px",
        478: "478px",
        517: "517px",
        530: "530px",
        677: "677px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        "4xl": "1.75rem",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      boxShadow: {
        card: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        form: "0px 0px 20px rgba(39, 103, 164, 0.3)",
      },
      fontSize: {
        "3.5xl": ["32px", "38.4px"],
        "2xs": ["11px", "13.2px"],
        "3xs": ["10px", "12px"],
        "4xs": ["9px", "10.8px"],
      },
      width: {
        "screen-11/12": "98vw",
      },
    },
  },
  plugins: [],
};
