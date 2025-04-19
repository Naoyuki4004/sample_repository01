import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import onlyWarn from "eslint-plugin-only-warn";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
    plugins: {
      "only-warn": onlyWarn,
    },
  },
]);