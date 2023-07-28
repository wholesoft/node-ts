/** @type {import('ts-jest').JestConfigWithTsJest} */

import { pathsToModuleNameMapper } from "ts-jest"

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
}
