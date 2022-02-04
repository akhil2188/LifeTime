module.exports = {
  moduleNameMapper: {
    "@handlers/(.*)": "<rootDir>/src/handlers/$1",
    "@lib/(.*)": "<rootDir>/src/lib/$1",
    "@services/(.*)": "<rootDir>/src/services/$1",
    "@test/(.*)": "<rootDir>/test/$1"
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};