const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary) ",
        },
      },
      minHeight: {
        content: "calc(100vh - 100px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
