import type { Config } from "jest";

const config: Config = {
  moduleDirectories: ["node_modules", "dist"],
  transformIgnorePatterns: ["!node_modules/"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

export default config;
