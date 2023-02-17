## Testing
`--experimental-vm-modules` is required to import from `@jest/globals`
`NODE_NO_WARNINGS=1` hides warnings in the test output from using the experimental flag `--experimental-vm-modules`
[ts-jest example esm repo](https://github.com/kulshekhar/ts-jest/tree/main/e2e/native-esm-ts)
`mjs-resolver.ts` needs to be a ts file since it's loaded as an ES module?
source code should have a `.mts` extension, but tests must have a `.ts` extension. I tried to use testMatch to load `.mts` files, but it wasn't working