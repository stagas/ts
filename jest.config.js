module.exports = {
  testEnvironment: 'jsdom', // or node
  rootDir: '.',
  roots: ['<rootDir>/test/', '<rootDir>/src'],
  testMatch: ['**/*.spec.{js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/test/web/'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageProvider: 'v8',
  moduleNameMapper: {
    'react\\/(jsx-runtime|jsx-dev-runtime)$': 'html-vdom/$1',
  },

  // enable this for real typescript builds (slow but accurate)
  // preset: 'ts-jest',

  // enable this for fast, correct sourcemaps but not all features supported
  // transform: {
  //   '\\.(js|jsx|ts|tsx)$': [
  //     '@stagas/sucrase-jest-plugin',
  //     {
  //       jsxPragma: 'h',
  //       jsxFragmentPragma: 'Fragment',
  //       production: true,
  //       disableESTransforms: true,
  //     },
  //   ],
  // },

  // enable this for fast, incorrect sourcemaps but more features supported

  transform: {
    '\\.(js|jsx|ts|tsx)$': [
      '@swc-node/jest',
      {
        swc: {
          jsc: {
            target: 'es2022',
            parser: {
              syntax: 'typescript',
              tsx: true,
              decorators: true,
              dynamicImport: true,
            },
            transform: {
              legacyDecorator: true,
              decoratorMetadata: true,
              useDefineForClassFields: true,
              react: {
                runtime: 'automatic',
                importSource: 'html-vdom',
              },
              hidden: {
                jest: true,
              },
            },
            keepClassNames: true,
          },
        },
      },
    ],
  },
}
