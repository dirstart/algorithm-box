/**
 * 有 n 件物品，用一个 w 的数组存起来，物品的价值是 v。
 * 一个容量为 C 的背包，如何选取物品放入背包，才能使背包的物品价值最大。
 * 【每种物品只有 1 件！】
 *
 * 给定一组物品，每个物品有重量和价值，在限定的总重量内，如何让总价值最大。
 *
 * i：表示有多少件物品
 * c：当前物品的容量/容积
 * v：物品的价值
 * f(i, c) = f(i - 1, c - w[i]) + value[i]
 *
 * 使右边得到，最大值
 * 【倒退】从终点看
 * 问题转化成：第 i 件物品，是否存在于【背包中】？
 */

/**
 *
 * @param {Array} weights 当前物品的体积
 * @param {Array} values 当前物品的价格
 * @param {Number} capacity 当前【背包】允许的重量，该值是死的
 *
 * 假设一个相对简单的场景。
 * 物品重量：【2， 3， 4】
 * 物品价值：【3， 4， 5】
 * 背包容量为 5
 *
 * 物品数量 * 背包容量
 * 填充过程：
 * 当 i = 1，重量 = 2，价值 = 【3】 dp[1][2] = 3
 * 如果当前物品重量 > 背包重量，dp[i][j] = dp[i - 1][j]
 * 如果没有 dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - 重量] + 价值)
 */

const knapsack = (weights, values, capacity) => {
  const n = weights.length
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0))
  // 物品数量
  for (let i = 1; i <= n; i++) {
    const currentWeight = weights[i - 1]
    const currentValue = values[i - 1]
    // 背包容量
    for (let j = 1; j <= capacity; j++) {
      if (currentWeight <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j - currentWeight] + currentValue, // 放入当前物品
          dp[i - 1][j], // 不放入当前物品
        )
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[n][capacity]
}

const value = knapsack([2, 3, 4], [3, 4, 5], 5)

const knapsack2 = (weights, values, capacity) => {
  const len = weights.length
  // 注意，这里删除掉的循环，是【第几个数目】的循环
  const dp = new Array(capacity + 1).fill(0)
  for (let i = 1; i <= len; i++) {
    const curWeight = weights[i] // 当前的物品
    const curValue = values[i]
    for (let j = capacity; j >= curWeight; j--) {
      dp[j] = Math.max(dp[j], dp[j - curWeight] + curValue)
    }
  }

  return dp[capacity]
}

const value2 = knapsack2([2, 3, 4], [3, 4, 5], 5)
console.log('🍀🍀🍀🍀', value2)

/**
 * 最长子序列
 *
 * [10,9,2,5,3,7,101,18]
 *
 * 第 i+1 个元素，大于第 i 个元素
 *
 * 从所有的下标开始，
 * dp[0] =
 * dp[1] =
 * dp[2] =
 * 最后再求 Math.max(dp[0], dp[1], dp[2], ...)
 *
 * f(i + 1) = f(i) + 1
 */

// f(i + 1) = f(i) + 1
const getLongSeries = (list) => {
  const len = list.length
  const dp = new Array(len).fill(1)
  let maxLen = 1
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (list[j] < list[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i]
    }
  }

  return maxLen
}

console.log('🍀🍀🍀🍀', getLongSeries([10, 9, 2, 5, 3, 7, 101, 18]))
