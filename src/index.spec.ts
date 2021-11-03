import { add, sub, div, mul } from './'

describe('a suite', () => {
  it('sums up 2 numbers', () => {
    expect(add(1, 1)).toEqual(2)
    expect(add(3, 12)).toEqual(15)
  })
})

it('subs 2 numbers', () => {
  expect(sub(1, 1)).toEqual(0)
  expect(sub(5, 3)).toEqual(2)
})

it('divs 2 numbers', () => {
  expect(div(5, 2)).toEqual(3)
})

it('muls 2 numbers', () => {
  expect(mul(5, 2)).toEqual(10)
})
