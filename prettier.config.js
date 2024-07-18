module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  importOrder: [
    "^@utils/(.*)$",
    "^@apis/(.*)$",
    "^@hooks/(.*)$",
    "^@recoils/(.*)$",
    "^@pages/(.*)$",
    "^@base/(.*)$",
    "^@common/(.*)$",
    "^@components/(.*)$",
    "^@styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
