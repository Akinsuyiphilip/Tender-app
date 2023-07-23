/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        spage: "30rem",
      },
      width: {
        "screen-1/2": "50%", // Set the height to 50% of the viewport height
        textbox: "20%",
        lite: "48%",
        sem: "95%",
        wity: "5rem",
        witry: "7rem",
      },
      height: {
        sidebarheight: "52.25rem",
        pieheight: "17.25rem",
        lineheight: "20rem",
        litheight: "30rem",
        limeheight: "11.0625rem",
      },
      colors: {
        backgd: "#272A2D",
        blurwhite: "#F7F7F7",
        neon: "#E4F065",
        lightBlu: "#C9F0FF",
        ashluxebg: "#090A0A",
        gray: "#72777A",
        grat: "#E6E7E9",
        greens: "#ECFCE5",
        green1: "#219653",
        lemon: "#E4F065",
        lightyellow: "#FFEFD7",
        yellowdarkesst: "#A05E03",
        yellowlightest: "#FFEFD7",
        lightgrayng: "#F7F9FB",
        success: "#28A745",
        successbg: "rgba(40, 167, 69, 0.10);",
      },
      boxShadow: {
        frw: "0px 2px 3px 0px rgba(0, 0, 0, 0.17), 0px 0px 3px 0px rgba(0, 0, 0, 0.08)",
        mer: "box-shadow: 0px 0px 8px 0px rgba(20, 20, 20, 0.08), 0px 0px 1px 0px rgba(20, 20, 20, 0.04)",
      },
      borderColor: {
        borderlighgray: "#E8E8E8",
      },
    },
  },
  plugins: [],
};
