import { vdom } from './jsx'

it('should create a jsx dom', () => {
  expect(vdom()).toEqual(['div', null])
})
