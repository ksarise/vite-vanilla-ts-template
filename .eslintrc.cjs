module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint-config-airbnb-base",
    "eslint-config-airbnb-typescript/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module",
    "@typescript-eslint/no-explicit-any": 2,
  },
  plugins: ["import", "@typescript-eslint"],
  rules: {
    "no-console": 0,
  },
  settings: {
    "import/resolver": {
      typescript: true,
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    noInlineConfig: true,
  },
  ignorePatterns: ["vite.config.ts"],
};
