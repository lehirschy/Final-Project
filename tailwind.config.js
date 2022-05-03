module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "screen-nonav": "calc(100vh - 88px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};