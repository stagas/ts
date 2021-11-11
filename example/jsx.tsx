const h = (...args: unknown[]) => args

console.log(<foo bar="baz" />)
// => [ 'foo', { bar: 'baz' } ]
