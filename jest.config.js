// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig.json');

const nextJest = require('next/jest')
const a = require('jest-module-name-mapper')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: require('jest-module-name-mapper').default()
  // moduleNameMapper: {
  //   // '^@/components/(.*)$': '<rootDir>/components/$1',
  //   // '^@/public/(.*)$': '<rootDir>/public/$1',
  //   // '^@/styles/(.*)$': '<rootDir>/styles/$1',
  //   // '^@/constants/(.*)$': '<rootDir>/constants/$1',
  //   // '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
  //   // '^@/models/(.*)$': '<rootDir>/models/$1',
  //   // '^@/pages/(.*)$': '<rootDir>/pages/$1',
  //   '^@/(.*)$': '<rootDir>/(.*)/$1',
  // }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)