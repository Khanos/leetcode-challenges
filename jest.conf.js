module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testMatch: ['**/challenges/**/*.test.js'],
  testPathIgnorePatterns: ['node_modules'],
  collectCoverage: true,
  collectCoverageFrom: ['**/challenges/**/*.js'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'tests',
    'api/mocks',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'html'],
};