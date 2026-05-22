// lint-staged.config.js
module.exports = {
  "*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"],
};
