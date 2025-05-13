let person = {
  name: 'chp',
  age: 18,
}

const gcRegister = new FinalizationRegistry((value) => {
  console.log('🍀🍀🍀🍀', value)
})

const m = new Map()
const weakM = new WeakMap()

function testMap() {
  let key = {}
  gcRegister.register(key)
  m.set(key)
  key = null
}

function testWeakMap() {
  let key = {}
  gcRegister.register(key)
  weakM.set(key)
  key = null
}

testMap()
testWeakMap() // 通过分别注释这两行代码，来观察输出结果 => 可以看到，只有 weakMap 会被回收

gc()
