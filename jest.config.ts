/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverageFrom: ["src/**/*.ts(x)?", "!src/**/index.ts", "!src/main.tsx"],
  moduleDirectories: ["node_modules"],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "public"],
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
};
