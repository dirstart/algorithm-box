const add5 = (x) => x + 5
const multi3 = (x) => x * 3
const square = (x) => x * x

// const composedFn = compose(square, multi3, add5)
// square(multi3(add5))

// 实现如上组合函数，该函数支持传递一个【初始值】
// console.log(composedFn(2))
// 计算步骤为 (3*(2+5))^2 => 21 * 21 => 441

const compose = function (...args) {}
