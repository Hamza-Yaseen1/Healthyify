const path = require("path");

const expoModulesCore = path
  .dirname(require.resolve("expo-modules-core/package.json"))
  .split(path.sep)
  .join("/");

module.exports = {
  preset: "jest-expo",
  moduleNameMapper: {
    "^expo-modules-core$": expoModulesCore,
    "^expo-modules-core/(.*)$": `${expoModulesCore}/$1`,
  },
};
