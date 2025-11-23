export default {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
   collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/main.jsx',
    '!src/**/*.d.ts',
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
}
