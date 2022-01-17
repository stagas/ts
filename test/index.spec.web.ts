import { add } from '../src'

describe('add(a, b)', () => {
  it('adds two numbers together into a div', () => {
    const div = document.createElement('div')
    div.textContent = '' + add(1, 2)
    expect(div.textContent).toEqual('3')
  })
})
