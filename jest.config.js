module.exports = {
  testEnvironment: 'node', // or 'jsdom'
  testMatch: ['**/*.spec.{ts,tsx}'],
  transform: {
    '\\.(js|jsx|ts|tsx)$': [
      '@stagas/sucrase-jest-plugin',
      {
        jsxPragma: 'h',
        jsxFragmentPragma: 'Fragment'
      }
    ]
  }
}
