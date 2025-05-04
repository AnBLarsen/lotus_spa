// eslint.config.js
import tsparser from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["node_modules"], // Ignore unnecessary files
  },
  {
    languageOptions: {
      parser: tsparser, // Correct way to use the TypeScript parser
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error", // Show Prettier errors as ESLint errors
      "no-console": "warn", // Warn on console.log
      "@typescript-eslint/no-unused-vars": ["warn"], // Warn on unused variables
    },
  },
];
