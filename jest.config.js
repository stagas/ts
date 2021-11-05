module.exports = {
  testEnvironment: 'node', // or 'jsdom'
  rootDir: 'src',
  testMatch: ['**/*.spec.{js,jsx,ts,tsx}'],
  coverageDirectory: '../coverage',
  transform: {
    '\\.(js|jsx|ts|tsx)$': [
      '@swc-node/jest',
      {
        react: {
          pragma: 'h',
          pragmaFrag: 'Fragment'
        }
      }
    ]
  }
}
