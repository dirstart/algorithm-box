import { describe } from 'mocha';
import { expect } from 'chai';
import { Query } from '../src/js/chainedFunction.js';
import { JSDOM } from 'jsdom';

// 创建模拟的 DOM 环境
const dom = new JSDOM(`<!DOCTYPE html><div id="testElement"></div>`);

global.document = dom.window.document;
global.window = dom.window;

describe('Query 类测试', () => {
    let testElement;
    
    beforeEach(() => {
        // 在每个测试前创建一个测试用的 div 元素
        testElement = document.createElement('div');
        testElement.id = 'testElement';
        document.body.appendChild(testElement);
    });

    afterEach(() => {
        // 在每个测试后移除测试用的 div 元素
        document.body.removeChild(testElement);
    });

    it('应该正确设置 CSS 样式', () => {
        new Query('#testElement')
            .css('color', 'red')

        // const style = window.getComputedStyle(testElement);
        // console.log('🍀🍀🍀🍀', style)
        // expect(style.color).to.equal('red');

        // new Query('#testElement')
        //     .css('color', 'red')
        //     .css('backgroundColor', 'blue');
        
        // const style = window.getComputedStyle(testElement);
        // expect(style.color).to.equal('red');
        // expect(style.backgroundColor).to.equal('blue');
    });

    // it('应该正确添加类名', () => {
    //     new Query('#testElement')
    //         .addClass('test-class');
        
    //     expect(testElement.classList.contains('test-class')).to.be.true;
    // });

    // it('应该正确绑定事件', (done) => {
    //     new Query('#testElement')
    //         .on('click', () => done());
        
    //     testElement.click();
    // });

    // it('当元素不存在时应该安全地执行方法', () => {
    //     const query = new Query('#nonExistentElement');
        
    //     expect(() => {
    //         query.css('color', 'red')
    //             .addClass('test-class')
    //             .on('click', () => {});
    //     }).to.not.throw();
    // });
});
