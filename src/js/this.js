function Test() {
  this.a = 'test' // 【实例属性】
  console.log(this, this.a) // { a: 'test' } 'test'
  const obj = {
    a: 'obj',
    fn() {
      console.log(this, this.a) // obj, 'obj'
    },
    _fn: function () {
      console.log(this, this.a) // obj, 'obj'
    },
    __fn: () => {
      console.log(this, this.a) // { a: 'test' }, 'test'
    },
  }

  return obj
}

const t = new Test()

t.fn() // obj, 'obj'

t._fn() // obj, 'obj'

t.__fn() // { a: 'test' }, 'test

console.log(t) // 指向的是 obj，将实例覆盖了

setTimeout(t.fn, 0)

// const { fn } = t
// fn() // 报错，全局 this 中没有 a
