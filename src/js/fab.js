// f(0) => 0
// f(1) => 1
// f(2) => 1
// f(n) = f(n - 1) + f(n - 2)
// f(3) = f(2) + f(1) = 2
// f(4) = f(3) + f(2) = 3
// f(5) = f(4) + f(3) = 5
// f(6) = f(5) + f(4) = 8
// f(7) = f(6) + f(5) = 13
// f(8) = f(7) + f(6) = 21
// f(9) = f(8) + f(7) = 34
// f(10) = f(9) + f(8) = 55

// 1.递归实现

const fabRecursive = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  return fabRecursive(n - 1) + fabRecursive(n - 2)
}

// 2.递归 + 备忘录优化
const fabRecursiveMemo = (n, cache = {}) => {
  if (cache[n]) {
    console.log('🍀🍀🍀🍀', 'use cache')
    return cache[n]
  }
  if (n === 0) return 0
  if (n === 1) return 1
  cache[n] = fabRecursiveMemo(n - 1, cache) + fabRecursiveMemo(n - 2, cache)
  return cache[n]
}

// 3.迭代实现，使用循环而非递归
const fabIteration = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  let params0 = 0
  let params1 = 1
  let count = 1
  // f(1) = f(2) = 1,f(3) = 2
  while (n - 2 > 0) {
    params0 = params1
    params1 = count
    count = params0 + params1
    --n
  }
  return count
}

// 当 n = 3, count = 1 + 1 + (1 + 2) => 5
console.log('🍀🍀🍀🍀', fabIteration(8))
console.log('🍀🍀🍀🍀', fabIteration(9))
console.log('🍀🍀🍀🍀', fabIteration(10))

// 4.动态规划实现，自底向上的方法
const fibDp = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
}
