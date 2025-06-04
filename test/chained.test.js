import { describe } from 'mocha'
import { expect } from 'chai'
// 导入待测函数
import { StringBuilder, Calculator } from '../src/js/chainedFunction.js'

describe('StringBuilder', () => {
  let sb

  beforeEach(() => {
    sb = new StringBuilder()
  })

  it('should initialize with empty string', () => {
    expect(sb.toString()).to.be.empty
  })

  it('should append single string correctly', () => {
    sb.append('Hello')
    expect(sb.toString()).to.be.equal('Hello')
  })

  it('should chain multiple appends correctly', () => {
    const result = sb.append('Hello').append(' ').append('World').toString()
    expect(result).to.be.equal('Hello World')
  })

  it('should handle empty string append', () => {
    sb.append('')
    expect(sb.toString()).to.be.equal('')
  })

  it('should handle multiple empty string appends', () => {
    sb.append('').append('').append('')
    expect(sb.toString()).to.be.equal('')
  })

  it('should handle mixed empty and non-empty appends', () => {
    sb.append('')
      .append('Hello')
      .append('')
      .append(' ')
      .append('World')
      .append('')
    expect(sb.toString()).to.be.equal('Hello World')
  })

  it('should handle non-string inputs by converting to string', () => {
    sb.append(123).append(true).append(null).append(undefined)
    expect(sb.toString()).to.be.equal('123truenullundefined')
  })

  it('should handle special characters', () => {
    sb.append('!@#$%^&*()').append('\n\t')
    expect(sb.toString()).to.be.equal('!@#$%^&*()\n\t')
  })
})

// 实现一个 Calculator 类，支持链式调用加减乘除运算，最后通过 value 属性获取结果。
describe('Calculator', () => {
  let calc

  beforeEach(() => {
    calc = new Calculator()
  })

  it('should handle chained operations', () => {
    const result = calc.add(5).subtract(2).multiply(3).divide(3).value
    // (5 - 2) * 3 / 3 = 3
    expect(result).to.equal(3)
  })
})
