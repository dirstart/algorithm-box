import {
  debounce,
  debounceImmediate,
  throttle,
  throttleTimer,
  throttleTrailing,
} from '../src/js/throttle-debounce.js'
import { expect } from 'chai'
import { describe } from 'mocha'

let count = 0
let trailingCount = 0

describe('throttle-debounce', () => {
  beforeEach(() => {
    count = 0
  })
  it('debounce normal', (done) => {
    const debounceFn = debounce(() => {
      ++count
    }, 100)
    debounceFn()
    debounceFn()
    debounceFn()
    setTimeout(() => {
      expect(count).to.equal(1)
      done()
    }, 500)
  })

  it('debounce immediate', (done) => {
    const debounceImmediateFn = debounceImmediate(() => {
      ++count
    }, 100)
    debounceImmediateFn()
    debounceImmediateFn()
    debounceImmediateFn()
    setTimeout(() => {
      expect(count).to.equal(2)
    }, 200)
    done()
  })

  it('throttle normal', (done) => {
    const throttleFn = throttle(() => {
      ++count
    }, 300)
    throttleFn() // 1
    setTimeout(() => {
      throttleFn()
      setTimeout(() => {
        throttleFn() // 2
        done()
      }, 300)
    }, 200)
  })

  it('throttle timer', (done) => {
    const throttleFn = throttleTimer(() => {
      ++count
    }, 300)
    throttleFn() // 1
    setTimeout(() => {
      throttleFn()
      setTimeout(() => {
        throttleFn() // 2
        done()
      }, 300)
    }, 200)
  })

  it('throttle trailing', (done) => {
    const throttleFn = throttleTrailing(() => {
      ++trailingCount
    }, 300)
    throttleFn() // 1
    setTimeout(() => {
      throttleFn() // 200 ms 之后又进行了执行，应该算是最后一次，理应执行
      setTimeout(() => {
        expect(trailingCount).to.equal(2)
        done()
      }, 500)
    }, 200)
  })
})
