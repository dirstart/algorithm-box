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

/**
 * 拿硬币，最终值为 36，总共有以下硬币：[5, 3, 2, 1]
 *
 * 遍历 1 ~ 36
 * f(n) = Min(f(n - 1)) + 1
 * 7*5 + 1
 */
const getCoinCount = (amount, coins = [5, 3, 2, 1]) => {
  const f = [] // 1 ~ 36
  f[0] = 0
  for (let i = 1; i <= amount; i++) {
    f[i] = Infinity
    for (let k = 0; k < coins.length; k++) {
      if (i - coins[k] >= 0) {
        f[i] = Math.min(f[i], f[i - coins[k]] + 1)
      }
    }
  }
  return f[amount]
}

/**
 * 【最少硬币数】——背包问题
 * 拿硬币，coins，amount
 * 没有任何一种硬币组合，则返回 -1
 * dp此时表达的是【次数】
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0 // dp 为 0 的时候，不需要硬币
  for (let coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}

/**
 * 给定 coins、amount，
 * 计算出可以凑成总金额的【组合数】
 * 如果任何硬币组合都无法凑出总金额，返回 0.
 *
 * amount = 5,
 * coins = [1, 2, 5] => [1, 2, 2] + [5] + [1*5] + [1, 1, 1, 2] => 4种
 *
 * amount = 3
 * conis = 0
 *
 * amount = 2
 * coins = [1, 2, 5]
 *
 * => [1 + 1, 2]
 *
 * 有点像是【阶梯】的题目。到达最后一步的时候，从结果往回看
 *
 * f(n) = f(n - coins[0]) + f(n - coins[1]) + f(n - conis[2])
 *
 * 你分析的是对的。。。竟然，但是为什么你最后写错了？
 *
 * dp 此时表达的是【组合方式的数目】
 *
 * dp[i] = dp[i - coin[0]] + dp[i - coin[1]]
 *
 */

const getCoinList = (coins, amount) => {
  // 此时 dp 代表凑成的组合数
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1 // 表示金额 0 ，有一种组合方式，什么都不选
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]
    }
  }
  return dp[amount]
}

console.log('🍀🍀🍀🍀', getCoinList([1, 2, 5], 5))
