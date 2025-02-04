module.exports = {
    content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["QuickSand", ...fontFamily.sans],
          serif: ["Shippori Mincho", ...fontFamily.serif],
        },
        spacing: {
          128: "32rem",
          144: "36rem",
          160: "40rem",
          176: "44rem",
          192: "48rem",
          256: "64rem",
          288: "72rem",
          320: "80rem",
        },
        
      },
    },
    plugins: [],
  };
  