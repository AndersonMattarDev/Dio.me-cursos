import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser },
    rules: {
      // Espaçamento e formatação
      "indent": ["error", 2],
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "no-trailing-spaces": "error",
      
      // Boas práticas
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "eqeqeq": ["error", "always"],
      
      // React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "warn",
    }
  },
  pluginReact.configs.flat.recommended,
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": "error",
    }
  },
  configPrettier,
];
