/**@type {import('jest').Config} */
module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/react-native/extend-expect"],
  setupFiles: [
    "./__tests__/mocks/libs/async-storage.js",
    "./__tests__/mocks/libs/react-native-safe-area-context.js",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],

  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg",
  },

  testPathIgnorePatterns: ["<rootDir>/__tests__/"],
};
