// vite.config.js
export default {
  esbuild: {
    jsxFactory: '_jsx',
    jsxFragment: '_jsxFragment',
    jsxInject: `import { jsx as _jsx, jsxs as _jsxs, Fragment as _jsxFragment } from 'base-custom-element/jsx-runtime'`,
  }
}
