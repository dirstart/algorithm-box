import { describe } from 'mocha'
import { expect } from 'chai'
import { debounce } from '../src/js/debounce.js'

describe('debounce must trigger once time', () => {
  it('shoulde call once time', (done) => {
    let count = 0
    const add = () => ++count

    const debounceFn = debounce(add, 100)
    debounceFn()
    debounceFn()
    debounceFn()

    setTimeout(() => {
      expect(count).to.be.equal(0)
    }, 0) // 此时尚未进行第一次调用
    setTimeout(() => {
      expect(count).to.be.equal(1)
      done()
    }, 500) // 此时总共只能调用了 1 次
  })
})
