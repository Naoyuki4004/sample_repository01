const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");

module.exports = defineConfig([{
    "extends": "@cybozu/eslint-config/presets/node-prettier",

    languageOptions: {
        globals: {
            ...globals.mocha,
        },
    },
}]);