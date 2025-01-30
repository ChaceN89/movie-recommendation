/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy", // ✅ Mock CSS imports
    "^@/(.*)$": "<rootDir>/src/$1" // ✅ Fix absolute imports for Jest
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", // ✅ Use Babel for TSX/JSX
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // ✅ Ignore build folders
};