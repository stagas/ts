module.exports = {
  testEnvironment: 'node', // or 'jsdom'
  testMatch: ['**/*.spec.{ts,tsx}'],
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
