module.exports = {
  extends: [
    require.resolve("eslint-config-react-app"),
    require.resolve("eslint-config-prettier/@typescript-eslint"),
    "plugin:prettier/recommended"
  ],
  settings: {
    react: {
      version: "999.999.999"
    }
  }
};
