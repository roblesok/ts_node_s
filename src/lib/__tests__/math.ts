import { add } from '../math'

describe('Math lib', () => {
  test('sum two numbers', () => {
    const res = add(1, 2)
    expect(res).toBe(3)
  })
})
