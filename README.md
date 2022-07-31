<h1>
typescript-minimal-template <a href="https://npmjs.org/package/typescript-minimal-template"><img src="https://img.shields.io/badge/npm-v7.0.5-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-2-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/typescript-minimal-template@7.0.5/dist/typescript-minimal-template.min.js"><img src="https://img.shields.io/badge/brotli-92b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

minimal typescript template

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i typescript-minimal-template </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add typescript-minimal-template </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add typescript-minimal-template</code>
</td></tr></table>
</h4>

## Examples

<details id="example$node" title="node" open><summary><span><a href="#example$node">#</a></span>  <code><strong>node</strong></code></summary>  <ul>    <details id="source$node" title="node source code" open><summary><span><a href="#source$node">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/node.ts">example/node.ts</a>  <p>

```ts
import { add } from 'typescript-minimal-template'

console.log(add(1, 2))
```

</p>
</details></ul></details><details id="example$web" title="web" open><summary><span><a href="#example$web">#</a></span>  <code><strong>web</strong></code></summary>  <ul>    <details id="source$web" title="web source code" open><summary><span><a href="#source$web">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/web.ts">example/web.ts</a>  <p>

```ts
import { add } from 'typescript-minimal-template'

const main = document.querySelector('main')!

main.innerHTML = `<h1>1 + 2 = ${add(1, 2)}</h1>`
```

</p>
</details></ul></details>

<h1><a href="https://github.com/stagas/typescript-minimal-template/generate">🥁 Use this template 🥁</a></h1>
<h2>Features</h2>
<ul>
<li>TypeScript with <a href="https://swc.rs/">SWC</a></li>
<li>Outputs both <strong>CommonJS</strong> and <strong>ES Modules</strong>, ready to <strong>publish on npm</strong></li>
<li>Automatic dist bundling using <a href="https://github.com/stagas/bunzee">bunzee</a></li>
<li>Documentation generation using <a href="https://github.com/stagas/dokio">dokio</a></li>
<li><a href="https://github.com/stagas/utr">Universal Test Runner</a> for isomorphic Node.js and real browser testing incl. coverage and snapshots</li>
<li><strong>JSX</strong> out of the box</li>
<li>Examples / Playground using <a href="https://github.com/stagas/vite-open">vite-open</a></li>
<li>Evergreen using <a href="https://github.com/stagas/pull-configs">pull-configs</a></li>
<li><a href="https://eslint.org/">ESLint</a></li>
<li><a href="https://dprint.dev/">dprint</a></li>
<li><a href="https://typicode.github.io/husky/">Husky</a></li>
</ul>

## API

<p>  <details id="add$1" title="Function" open><summary><span><a href="#add$1">#</a></span>  <code><strong>add</strong></code><em>(a, b)</em>     &ndash; Adds two numbers together.</summary>  <a href="src/mod.ts#L12">src/mod.ts#L12</a>  <ul>    <p>  <p>

```ts
add(1, 2) // => 3
```

</p>
  <details id="a$3" title="Parameter" ><summary><span><a href="#a$3">#</a></span>  <code><strong>a</strong></code>     &ndash; First number</summary>    <ul><p>number</p>        </ul></details><details id="b$4" title="Parameter" ><summary><span><a href="#b$4">#</a></span>  <code><strong>b</strong></code>     &ndash; Second number</summary>    <ul><p>number</p>        </ul></details>  <p><strong>add</strong><em>(a, b)</em>  &nbsp;=&gt;  <ul>number</ul></p></p>    </ul></details></p>

## Contributing

[Fork](https://github.com/stagas/typescript-minimal-template/fork) or [edit](https://github.dev/stagas/typescript-minimal-template) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
