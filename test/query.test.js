import { describe } from 'mocha'
import { expect } from 'chai'
import { Query } from '../src/js/chainQuery.js'
import { JSDOM } from 'jsdom'

// 创建模拟的 DOM 环境
const dom = new JSDOM(`<!DOCTYPE html><div id="testElement"></div>`)

global.document = dom.window.document
global.window = dom.window

const rgbToHex = (rgb) => {
  const [r, g, b] = rgb.match(/\d+/g).map(Number)
  return `#${[r, g, b]
    .map((item) => {
      return item.toString(16).padStart(2, 0)
    })
    .join('')}`
}

describe('Query 类测试', () => {
  // 测试是否能够正确获取 dom
  it('是否能够正确获取 dom', () => {
    const query = new Query('#testElement')
    const _ele = document.getElementById('testElement')
    expect(query.element).to.equal(_ele)
  })
  it('测试获取异常时，为 null', () => {
    const query = new Query('.god')
    expect(query.element).to.be.null
  })
  it('测试是否能够正确添加 css', () => {
    const query = new Query('#testElement')
    query.css('color', '#089e8a')
    const hexColor = rgbToHex(query.element.style.color)
    expect(hexColor).to.equal('#089e8a')
  })
  // 测试如果为异常，是否正确抛出错误
  it('测试如果为异常，是否正确抛出错误', () => {
    const query = new Query('.god')
    query.css('color', '#089e8a')
    expect(query.document).to.not.throw
  })

  it('测试能否正确添加 class', () => {
    const query = new Query('#testElement')
    query.addClass('test')
    expect(query.element.classList.contains('test')).to.be.true
  })
  it('测试能否正确添加事件', () => {
    const query = new Query('#testElement')
    let flag = false
    query.on('click', () => {
      flag = true
    })
    query.element.click()
    expect(flag).to.be.true
  })
})
