import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.jest,
      }
    },
    ignores: [
      "coverage/*",    // Ignore coverage folder
      "node_modules/*", // Ignore node_modules folder
      "dist/*",        // Ignore dist folder
      "build/*",       // Ignore build folder
      "*.min.js",     // Ignore minified JavaScript files
      "*.bundle.js",  // Ignore bundled JavaScript files
      "*.config.js",  // Ignore configuration files
    ],
  },
  pluginJs.configs.recommended,
];