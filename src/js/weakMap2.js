const register = new FinalizationRegistry((value) => {
  console.log('🍀🍀🍀🍀 回收了', value)
})

let key = {
  obj: 'chp',
}
register.register(key)

const weakIns = new WeakMap()
// weakIns.set(key, 1) // 当然，这里的 key 是可以被回收的

const ins = new Map()
// ins.set(key, 1) // 可以看到，只有 weakMap 会被回收

key = null

gc() // 🍀🍀🍀🍀 回收了 undefined
