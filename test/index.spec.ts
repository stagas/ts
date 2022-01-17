import { add } from '../src'

describe('add(a, b)', () => {
  it('adds two numbers together', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
