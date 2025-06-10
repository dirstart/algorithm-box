import { expect } from 'chai'
import { throttle } from '../src/js/throttle.js'

describe('节流函数测试', () => {
  it('应该在指定时间间隔内只执行一次', (done) => {
    let count = 0
    const throttledFn = throttle(() => {
      count++
    }, 100)

    throttledFn()
    throttledFn()
    throttledFn()

    expect(count).to.equal(1)

    setTimeout(() => {
      throttledFn()
      expect(count).to.equal(2)
      done()
    }, 150)
  })

  it('应该正确传递参数', (done) => {
    let result = null
    const throttledFn = throttle((a, b) => {
      result = a + b
    }, 100)

    throttledFn(1, 2)

    setTimeout(() => {
      expect(result).to.equal(3)
      done()
    }, 150)
  })

  it('应该保持正确的 this 上下文', (done) => {
    const obj = {
      value: 0,
      increment() {
        this.value++
      },
    }

    const throttledFn = throttle(obj.increment, 100)
    throttledFn.call(obj)

    setTimeout(() => {
      expect(obj.value).to.equal(1)
      done()
    }, 150)
  })

  it('应该在时间间隔内多次调用时只执行一次', (done) => {
    let count = 0
    const throttledFn = throttle(() => {
      count++
    }, 100)

    const interval = setInterval(() => {
      throttledFn()
    }, 20)

    setTimeout(() => {
      clearInterval(interval)
      expect(count).to.be.at.most(2)
      done()
    }, 150)
  })
})
