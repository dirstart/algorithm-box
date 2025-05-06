import { describe } from 'mocha'
import { promiseAll } from '../src/promiseAll.js'
import { expect } from 'chai'

describe('Promise.all', () => {
  it('1.【基本功能】所有Promise成功时，返回数组', async () => {
    const pList = [
      Promise.resolve(1),
      Promise.resolve('chp'),
      Promise.resolve('hhh'),
    ]
    const result = await promiseAll(pList)
    expect(result).to.deep.equal([1, 'chp', 'hhh'])
  })

  it('2.【基本功能】按顺序返回结果', async () => {
    const pList = [
      new Promise((resolve) => setTimeout(() => resolve('slow'), 1000)),
      new Promise((resolve) => setTimeout(() => resolve('quick'), 50)),
      Promise.resolve('instant'),
    ]
    const result = await promiseAll(pList)

    expect(result).to.deep.equal(['slow', 'quick', 'instant'])
  })

  it('3.【异常处理】有任一异常，则抛出', async () => {
    const error = new Error('self custom error')
    const pList = [
      new Promise((resolve) => setTimeout(() => resolve('slow'), 1000)),
      new Promise((resolve) => setTimeout(() => resolve('quick'), 50)),
      Promise.resolve('instant'),
      Promise.reject(error),
    ]
    try {
      await promiseAll(pList)
    } catch (pError) {
      expect(pError).to.equal(error)
    }
  })

  it('4.【边界处理】非Promise值', async () => {
    const nonPromise = ['1', { a: 1 }]
    const result = await promiseAll(nonPromise)
    expect(result).to.deep.equal(nonPromise)
  })
  it('5.【边界处理】空数组处理', async () => {
    const emptyPromise = []
    const result = await promiseAll(emptyPromise)
    expect(result).to.be.an('Array').that.is.empty
  })
  it('6.【基本功能】所有 Promise 返回的时候，才进行 resolve', async () => {
    let count = 0
    const pList = [
      new Promise((resolve) =>
        setTimeout(() => {
          resolve('slow')
          ++count
        }, 1000),
      ),
      new Promise((resolve) =>
        setTimeout(() => {
          resolve('quick')
          ++count
        }, 50),
      ),
    ]
    const result = await promiseAll(pList)
    expect(result).to.deep.equal(['slow', 'quick'])
    expect(count).to.be.equal(2)
  })
})
