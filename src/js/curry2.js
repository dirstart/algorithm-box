// // 实现sum函数，使得
// // sum(1,2,3).sumOf() //6
// // sum(2,3)(2).sumOf() //7
// // sum(1)(2)(3)(4).sumOf() //10
const sum = function (...args) {
  let list = args
  const fn = (...innerArgs) => {
    if (innerArgs.length === 0) {
      return fn.sumOf()
    }
    list = list.concat(innerArgs)
    return fn
  }

  fn.sumOf = () => list.reduce((pre, next) => (next += pre), 0)

  return fn
}

sum(1, 2, 3).sumOf()
sum(2, 3)(2).sumOf()
sum(1)(2)(3)(4).sumOf()
