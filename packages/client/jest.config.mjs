import {readFileSync} from 'fs'

import {pathsToModuleNameMapper} from 'ts-jest'

const tsConfig = JSON.parse(readFileSync(new URL('./tsconfig.json', import.meta.url)))

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: [tsConfig.compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths),
}
