const _mySymbol = Symbol('me')

const a = {
  b: 'chp',
  _null: null,
  _boolean: false,
  _date: new Date(),
  _reg: new RegExp(/abc/g),
  [_mySymbol]: 123,
  wtf: Symbol('god'),
  d: {
    name: 'chp',
    age: 18,
    list: [3, 99],
  },
}

// 增加循环引用（结构化克隆支持）
a._loopA = a

export const deepCopy = (obj, cache = new WeakMap()) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }

  if (cache.has(obj)) {
    return cache.get(obj)
  }

  let result = Array.isArray(obj) ? [] : {}
  cache.set(obj, result)

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepCopy(obj[key], cache)
    }
  }
  const symbolList = Object.getOwnPropertySymbols(obj)
  for (let symbolKey of symbolList) {
    result[symbolKey] = deepCopy(obj[symbolKey])
  }

  return result
}

// 共 9 个属性

const _deepA = deepCopy(a)
