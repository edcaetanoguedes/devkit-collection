import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.json"], plugins: { json }, language: "json/json" },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc" },
]);
