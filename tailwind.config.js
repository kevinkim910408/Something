const config = {
  darkMode: ["class"],
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
      height: {
        content: "calc(100vh - 100px)",
      },
      minHeight: {
        content: "calc(100vh - 100px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
