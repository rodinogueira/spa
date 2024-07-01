module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "prettier"], // Adicione "prettier" aos plugins
  rules: {
    "linebreak-style": ["error", "unix"], // Define o estilo de quebra de linha como "unix" para LF
    "prettier/prettier": "error", // Ativa a regra do Prettier
    // outras regras aqui
  },
};
