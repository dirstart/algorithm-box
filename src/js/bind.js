Function.prototype.__bind = function (context, ...outerArgs) {
  const self = this
  const fn = function (...args) {
    const argList = [...outerArgs, ...args]
    if (new.target) {
      // 保留此时的 this
      return self.apply(this, argList)
    }
    return self.apply(context, argList)
  }
  if (this.prototype) {
    fn.prototype = Object.create(this.prototype)
    // 绑定后，this 指向的是原型
    fn.prototype.constructor = fn
  }

  return fn
}

function Person(b, c) {
  console.log('🍀🍀🍀🍀', this.a, b, c)
  this.b = b
  this.c = c
}
const obj = {}
const BoundPerson = Person.__bind(obj)
const _b = new BoundPerson(1, 2)

console.log('🍀🍀🍀🍀', _b instanceof Person)
