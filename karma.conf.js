module.exports = config => {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [{ pattern: 'src/**/*.ts' }],
    preprocessors: {
      '**/*.ts': 'karma-typescript',
      '**/*.tsx': 'karma-typescript'
    },
    reporters: ['progress', 'dots', 'karma-typescript'],
    browsers: ['ChromeHeadless']
  })
}
