/**
 * 将一段时间内，频繁触发的函数 fn，合并为一次执行
 * 1.需要能将上一次执行停止
 * 2.需要记录时间
 * 3.需要执行函数
 */
export const debounce = (fn, delay) => {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// let count = 0
// const add = () => ++count
// const _add = debounce(add, 100)
// _add()
// _add()
// _add()
// setTimeout(() => {
//   console.log('🍀🍀🍀🍀', count) // 期望值为 1
// }, 1000)
