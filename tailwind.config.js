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
      width: {
        "screen-1/2": "50%", // Set the height to 50% of the viewport height
        textbox: "35.5rem",
      },
      colors: {
        neonLogo: "#E4F065", // Custom color
        title: "#1F2739",
        skylighter: "#F2F4F5",
        line: "#E8E8E8",
        gray: "#4F4F4F",
        backgd: "#F7F7F7",
        blue: "#0065D0",
      },
      lineHeight: {
        11: " 3.35rem",
      },
      boxShadow: {
        frw: "0px 2px 3px 0px rgba(0, 0, 0, 0.17), 0px 0px 3px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
