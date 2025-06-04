import { describe } from 'mocha'
import { expect } from 'chai'
import { myInstanceof } from '../src/js/instanceof.js'

function F() {}
function O() {}
const obj = new O()
O.prototype = new F()
const obj2 = new O()

describe('instanceof', () => {
  it('should return true', () => {
    expect(myInstanceof([], Array)).to.be.true
    expect(myInstanceof({}, Object)).to.be.true
    expect(myInstanceof(new Date(), Object)).to.be.true
    expect(myInstanceof(new Date(), Date)).to.be.true
  })

  it('self instanceof', () => {
    expect(myInstanceof(obj, O)).to.be.false // 原型链上没有
    expect(myInstanceof(obj, F)).to.be.false // 原型链上没有
    expect(myInstanceof(obj, Object)).to.be.true // 所有对象的原型链上都有Object
    expect(myInstanceof(obj2, O)).to.be.true // 新对象的原型链上有O
    expect(myInstanceof(obj2, F)).to.be.true // 新对象的原型链上有F
    expect(myInstanceof(obj2, Object)).to.be.true // 所有对象的原型链上有Object
  })

  it('should throw TypeError', () => {
    expect(myInstanceof(obj, 3)).to.throw
  })
})
