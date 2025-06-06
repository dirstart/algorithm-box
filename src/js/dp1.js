/**
 * 爬楼梯，每次只能爬 1 或者 2
 * 输入 n = 2 => [1 + 1, 2] => 2次
 * f(1) = 1
 * f(2) = 2
 * f(3) = [1+1+1, 2+1, 1+2]
 *
 * f(n) = f(n - 1) + f(n - 2)
 */
const climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  let dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

console.log('🍀🍀🍀🍀', climbStairs(2))

// ;[(climbStairs(2), climbStairs(3), climbStairs(4), climbStairs(5))].forEach(
//   (i) => console.log('🍀🍀🍀🍀', i),
// )

/**
 * 拿硬币
 */
// const coins = [1, 3, 5]
// const count = (total = 36, coins = [1, 2, 3, 4]) => {
//   let f = []
//   f[0] = 0
//   f[1] = 1

//   for (let i = 2; i <= total; i++) {
//     f[i] = Infinity
//     for (let cur = 0; cur < coins.length; cur++) {
//       if (i - coins[cur] >= 0) {
//         f[i] = Math.min(f[i], f[i - coins[cur]] + 1)
//       }
//     }
//   }

//   return f[i]
// }
// count(5)
