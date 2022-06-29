import { describe, expect, it } from 'vitest'
import { sum } from '@/index'

describe('sum', () => {
  it('simple test', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
