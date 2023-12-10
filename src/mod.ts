export const add = (a: number, b: number) => a + b

export function test_add() {
  describe('add', () => {
    it('works', () => {
      expect(add(1, 2)).toEqual(3)
    })
  })
}
