// 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。
// 我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。

// [4, 2, 1] => 4

// 每次取其中的 1 或者 2

const miniMax = (list) => {
  let count = 0
  for (let i = 0; i < list.length; i++) {
    count += (list - 1) / 2 + 1
  }
  return count
}
