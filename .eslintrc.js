module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['dist', 'node_modules'],
  plugins: ['import'],
  settings: {
    react: {
      pragma: 'h',
      fragment: 'Fragment'
    }
  },
  rules: {}
}
