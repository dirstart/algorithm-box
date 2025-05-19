class Query {
  constructor(selector) {
    this.element = document.querySelector(selector)
  }

  css(property, value) {
    if (this.element) {
      this.element.style[property] = value
    }
    return this
  }

  addClass(className) {
    if (this.element) {
      this.element.classList.add(className)
    }
    return this
  }

  on(event, callback) {
    if (this.element) {
      this.element.addEventListener(event, callback)
    }
    return this
  }
}

// 使用示例
new Query('#myBtn')
  .css('color', 'red')
  .addClass('active')
  .on('click', () => console.log('Clicked!'))
