export default {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  preset: 'ts-jest',
  setupFilesAfterEnv: ["<rootDir>/src/configs/test.config.ts"]
};