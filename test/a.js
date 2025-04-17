import { add } from './add.js'
import { expect } from 'chai'

describe('add function', () => {
  /**
   * 相等或者不相等
   */
  it('adds two positive numbers correctly', () => {
    expect(add(2, 3)).to.equal(5)
  })

  it('adds two negative numbers correctly', () => {
    expect(add(-2, -3)).to.equal(-5)
  })

  it('adds 10000 + 20000 must be 30000', () => {
    expect(add(10000, 20000)).to.equal(30000)
  })
  /**
   * 布尔值判断
   */
  it('bool check correctly?', () => {
    expect(false).to.be.not.ok
    expect(true).to.be.ok
  })

  /**
   * typeof
   */
  it('typeof correctly?', () => {
    expect('everything').to.be.a('string')
    expect(3).to.be.a('number')
    expect({ a: 1 }).to.be.an('object').to.be.ok
  })
  /**
   * match判断
   */
  it('should match', () => {
    expect('foo').to.match(/^fo+/)
  })
})

// 新开大标题
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect([1, 2, 3].indexOf(4)).to.equal(-1)
    })
  })
  // 测试对象包含
  describe('#include()', () => {
    it('should return true', () => {
      expect({ a: 123, b: 3445 }).to.include({ a: 123 }).to.include({ b: 3445 })
    })
  })
})
