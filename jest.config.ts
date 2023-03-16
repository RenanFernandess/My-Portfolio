/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // The directory where Jest should store its cached dependency information
  cacheDirectory: "./tmp/jest_rs",

  // Automatically clear mock calls, instances, contexts and results before every test
  // clearMocks: false,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ["src/**/*.ts(x)?", "src/**/index.ts"],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    "node_modules"
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx",
  ],

  // Automatically reset mock state before every test
  // resetMocks: false,

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/",
    "public"
  ],

  modulePaths: ['<rootDir>/app/'],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
};
