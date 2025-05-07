import { expect } from 'chai'
import { describe } from 'mocha'

import { deepCopy } from '../src/deepCopy.js'

describe('deepCopy', () => {
  let _mySymbol
  let originalObj

  before(() => {
    // 全局初始化，只执行一次
    _mySymbol = Symbol('me')
  })

  beforeEach(() => {
    // 每个测试用例前，执行的初始化
    // 每个测试用例前的初始化
    originalObj = {
      b: 'chp',
      _null: null,
      _boolean: false,
      _date: new Date('2023-01-01T00:00:00.000Z'),
      _reg: new RegExp(/abc/g),
      [_mySymbol]: 123,
      wtf: Symbol('god'),
      d: {
        name: 'chp',
        age: 18,
        list: [3, 99],
      },
    }
    originalObj._loopA = originalObj // 循环引用
  })
  after(() => {
    console.log('🍀🍀🍀🍀 测试结束，清理资源')
  })

  it('should return primitive value', () => {
    expect(deepCopy(originalObj).b).to.equal('chp')
    expect(deepCopy(originalObj).d).to.deep.equal({
      name: 'chp',
      age: 18,
      list: [3, 99],
    })
  })

  it('deep equal but not same reference', () => {
    const deepA = deepCopy(originalObj)
    expect(deepA).to.deep.equal(originalObj)
    expect(deepA).to.not.equal(originalObj)
  })

  it('should handle circular reference', () => {
    const deepA = deepCopy(originalObj)
    expect(deepA._loopA).to.equal(deepA)
  })
})
