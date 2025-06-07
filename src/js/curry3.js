const makeCurry = (fn) => {
  const len = fn.length
  let list = []
  const innerFn = (...args) => {
    list = list.concat(args)
    if (list.length >= len) {
      // 可能超出，进行裁剪
      return fn.apply(null, list.slice(0, len))
    } else {
      return innerFn
    }
  }
  return innerFn
}

const makeCurryMini = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    }
    return (...nextArgs) => curried(...args, ...nextArgs)
  }
}

const sum = (a, b, c) => {
  return a + b + c
}
let currySum = makeCurry(sum)
let currySumMini = makeCurryMini(sum)

const x = currySum(3)
const y = x(4)
const z = y(4, 99, 88)

const x1 = currySumMini(3)
const y1 = x1(4)
const z1 = y1(4, 9, 88)
console.log('🍀🍀🍀🍀', z1)
