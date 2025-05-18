import { describe } from 'mocha'
import { expect } from 'chai'
import { Query } from '../src/js/chainQuery.js'
import { JSDOM } from 'jsdom'

// 创建模拟的 DOM 环境
const dom = new JSDOM(`<!DOCTYPE html><div id="testElement"></div>`)

global.document = dom.window.document
global.window = dom.window

const rgbToHex = (rgb) => {
  const [r, g, b] = rgb.match(/\d+/g)
  return `#${([r, g, b].map(item => {
    return item.toString(16).padStart(2, 0)
  })).join('')}`
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
    const hexColor = 
    // expect(query.element.style.color).to.equal('#089e8a')
  })
  // 测试如果为异常，是否正确抛出错误
})
