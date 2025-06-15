const deepCopy = <T>(source: T, cache = new WeakMap<any, any>()) => {
  if (typeof source !== 'object') {
    return source
  }
  if (source instanceof Date) {
    return new Date(source)
  }
  if (source instanceof RegExp) {
    return new RegExp(source)
  }
  // 处理 map
  if (source instanceof Map) {
    const m = new Map()
    cache.set(source, m)
    source.forEach((value, key) => {
      m.set(key, value)
    })
    return m
  }
  // 处理 set
  if (source instanceof Set) {
    const m = new Set()
    cache.set(source, m)
    source.forEach((key) => {
      m.add(key)
    })
    return m
  }
  if (cache.has(source)) {
    return cache.get(source)
  }
  let result: any = Array.isArray(source) ? [] : {}
  cache.set(source, result)
  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      result[key] = deepCopy(source[key], cache)
    }
  }

  // 处理 symbol 键值
  const symbolList = Object.getOwnPropertySymbols(source)
  for (const symbolKey of symbolList) {
    result[symbolKey] = deepCopy((source as any)[symbolKey])
  }
  return result
}

// 使用示例
const deepCopyData: any = {
  a: 1,
  b: 'string',
  c: true,
  d: [1, 2, 3],
  e: { f: { g: 'nested' } },
  date: new Date(),
  regex: /test/g,
  map: new Map([['key', 'value']]),
  set: new Set([1, 2, 3]),
  buffer: new ArrayBuffer(8),
  arr: new Int32Array([1, 2, 3, 4]),
  [Symbol('symbolKey')]: 'symbolValue',
  func: function () {
    console.log(this.a)
  },
}

// 添加循环引用
deepCopyData.self = deepCopyData

const copied = deepCopy(deepCopyData)

console.log('🍀🍀🍀🍀', copied)
