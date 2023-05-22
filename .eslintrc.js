module.exports = {
  extends: [
    'airbnb-base',
    'eslint-config-airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslint.js'],
};
