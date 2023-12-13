module.exports = {
  rootDir: "src",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },

  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/identity-obj-proxy.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
