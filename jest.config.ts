export default {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  preset: 'ts-jest',
  setupFilesAfterEnv: ["<rootDir>/src/configs/test.config.ts"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/file-mock.js"
  }
};