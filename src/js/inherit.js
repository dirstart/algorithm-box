// 现有以下性能较差的代码
function HeavyComponent() {
  this.id = Math.random()
  this.data = new Array(10000).fill('data')
}

HeavyComponent.prototype.render = function () {
  console.log('Rendering:', this.id)
}

// 问题：如何优化创建大量HeavyComponent实例时的内存使用？
// 要求：
// 1. 保持render方法的可用性
// 2. 避免每个实例都创建大数组，让它为共享属性
// 3. 写出优化后的代码实现
// 4. 解释优化原理

function F() {
  this.id = Math.random()
}
F.prototype.data = new Array(10000).fill('data')
F.prototype.render = function () {
  console.log('Rendering:', this.id)
}

let list = []
for (let i = 0; i < 100; i++) {
  list.push(new F())
}

console.log('🍀🍀🍀🍀', list)
