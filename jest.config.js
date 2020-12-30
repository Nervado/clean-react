module.exports = {
  roots: ["<rootDir>/scr"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnviromment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
