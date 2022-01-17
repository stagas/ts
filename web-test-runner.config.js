const { esbuildPlugin } = require('@web/dev-server-esbuild')
const { summaryReporter } = require('@web/test-runner')

module.exports = {
  concurrency: 1,
  nodeResolve: true,
  files: ['test/**/*.spec.web.{ts,tsx}'],
  plugins: [
    esbuildPlugin({
      ts: true,
      tsx: true,
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
    }),
  ],
  reporters: [
    summaryReporter(),
  ],
  coverageConfig: {
    include: ['src/**/*.{ts,tsx}'],
  },
  testRunnerHtml: testFramework => `
    <html>
      <head>
        <script type="module" src="${testFramework}"></script>
        <script type="module">import 'jest-browser-globals';</script>
      </head>
    </html>
  `,
}
