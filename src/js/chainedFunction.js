// 题目：请实现一个简单的 StringBuilder 类，支持链式调用方法 append() 和 toString()，示例用法如下：
export class StringBuilder {
    constructor() {
        this.str = ''
    }
    append(str) {
        this.str += str
        return this
    }
    toString() {
        return this.str
    }
}
const sb = new StringBuilder();
const result = sb.append('Hello').append(' ').append('World').toString();
console.log(result); // 输出 "Hello World"


// calc.add(5).subtract(2).multiply(3).divide(3).value;
export class Calculator {
    constructor() {
        this.value = 0;
    }
    add(number) {
        this.value += number
        return this
    }
    subtract(number) {
        this.value -= number
        return this
    }
    multiply(number) {
        this.value *= number
        return this
    }
    divide(number) {
        this.value /= number
        return this
    }
}

const calc = new Calculator();
const calcResult = calc.add(5).subtract(2).multiply(3).divide(3).value;
console.log('🍀🍀🍀🍀', calcResult)


export class Query {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  css(property, value) {
    if (this.element) {
      this.element.style[property] = value;
    }
    return this;
  }
  addClass(className) {
    if (this.element) {
      this.element.classList.add(className);
    }
    return this;
  }

  on(event, callback) {
    if (this.element) {
      this.element.addEventListener(event, callback);
    }
    return this;
  }
}

// new Query('#testElement')
//   .css('color', 'red')
//   .addClass('active')
//   .on('click', () => console.log('Clicked!'));