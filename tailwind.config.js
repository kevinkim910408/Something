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
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
