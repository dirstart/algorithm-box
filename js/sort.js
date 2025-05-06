// 创建 10 个随机数
const genRandomNumbers = (count = 10, min = 10, max = 100) => {
  return Array.from({ length: count }, (element, index) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  })
}
// 创建 10 个已经按顺序的数组
const genSortedNumbers = (count = 10, min = 10, max = 100) => {
  return Array.from({ length: count }, (element, index) => {
    return index + 1
  })
}
// 测试算法正确性（如有异常提前返回）
const isVerify = (fn) => {
  const randomList = genRandomNumbers()
  const targetList = String([...randomList].sort((a, b) => a - b))
  const result = String(fn(randomList))
  console.group('🍀🍀🍀🍀', fn.name)
  console.log('🍀🍀🍀🍀 result is:', result)
  console.log('🍀🍀🍀🍀 check success', targetList === result)
  if (targetList !== result) {
    console.log('🍀🍀🍀🍀 为什么错误', targetList, result)
  }
  console.groupEnd()
}
const numberList = genRandomNumbers()
const sortedList = genSortedNumbers()

// 1.冒泡排序，数组长度为 10，i的区间为 [0, 8]，j 的区间为 [1, 9]；数组长度为 3，i 的区间为 [0, 1]，j 的区间为 [1, 2]
const bubbleSort = (list) => {
  const len = list.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        ;[list[j], list[j + 1]] = [list[j + 1], list[j]]
      }
    }
  }
  return list
}

// 1.冒泡排序，标志位优化版本
const bubbleSort2 = (list) => {
  const len = list.length
  let swaped = false
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        ;[list[j], list[j + 1]] = [list[j + 1], list[j]]
        swaped = true
      }
    }
    // 如果没有交换过，说明已经有序，直接返回
    if (!swaped) {
      break
    }
  }
  return list
}

// 2.选择排序，选择一个最小的，放在前面
const selectionSort = (list) => {
  const len = list.length
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j
      }
    }
    ;[list[i], list[minIndex]] = [list[minIndex], list[i]]
  }
  return list
}

// 3.插入排序，将一个数插入到已经有序的数组中（类似于我们打牌的时候）
const insertionSort = (list) => {
  const len = list.length
  // 从第一个数开始，算作有序的；然后进行找位置、位置不符合的则往前继续让位
  for (let i = 1; i < len; i++) {
    const current = list[i]
    let preIndex = i - 1
    while (preIndex >= 0 && current < list[preIndex]) {
      // 往前让位
      list[preIndex + 1] = list[preIndex]
      preIndex--
    }
    list[preIndex + 1] = current
  }
  return list
}

// 4.快速排序，选取一个点位，将小于它的放在左边，大于它的放在右边；递归地实现
const quickSort = (list) => {
  if (list.length <= 1) {
    return list
  }
  const pivot = list[0]
  const left = []
  const right = []
  for (let i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      left.push(list[i])
    } else {
      right.push(list[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

// 5.堆排序
const heapSort = (list) => {
  // 每次调整针对 【父节点】+ 2个【子节点】 => 随后可能扩散到往下的整个子树 （向下传递！！！！理解的关键）
  // heapify 只会向下递归调整子节点，不会向上回溯父节点，这是由堆结构的特性和建堆算法的方向性共同保证的。
  const heapify = (arr, n, i) => {
    const left = 2 * i + 1
    const right = 2 * i + 2
    let largest = i
    if (left < n && arr[left] > arr[largest]) {
      largest = left
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right
    }
    if (largest !== i) {
      ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
      heapify(arr, n, largest)
    }
  }

  const len = list.length
  // 生成最大堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    // 每次调整某个层级以及往下递归层级的内容
    // 每次处理一个层级，最终处理到 0 级
    heapify(list, len, i)
  }
  // 将最大堆的根节点（最大值）与最后一个元素交换，并重新调整堆
  for (let i = len - 1; i > 0; i--) {
    ;[list[0], list[i]] = [list[i], list[0]]
    // 因为取的是根节点 0 级，所以这里是 0
    heapify(list, i, 0)
  }
  return list
}

// 6.归并排序
const _merge = (left, right) => {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

const mergeSort = (list) => {
  if (list.length <= 1) {
    return list
  }
  const mid = Math.floor(list.length / 2)
  const left = list.slice(0, mid)
  const right = list.slice(mid)

  return _merge(mergeSort(left), mergeSort(right))
}

// 7.希尔排序，插入排序比较晦涩的原因，可能是因为是【从后往前】比较多。
const shellSort = (list) => {
  const len = list.length
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 从 gap 的位置开始顺序遍历
    for (let i = gap; i < len; i++) {
      const current = list[i]
      let preIndex = i
      // 以 gap 为间隔进行插入排序
      while (preIndex >= gap && current < list[preIndex - gap]) {
        list[preIndex] = list[preIndex - gap]
        preIndex -= gap
      }
      list[preIndex] = current
    }
  }
  return list
}
isVerify(bubbleSort)
isVerify(selectionSort)
isVerify(insertionSort)
isVerify(quickSort)
isVerify(heapSort)
isVerify(mergeSort)
isVerify(shellSort)
