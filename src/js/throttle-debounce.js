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

// 带立即执行的防抖
export const debounceImmediate = (fn, delay) => {
  let timer = null
  let firstFlag = true
  return function (...args) {
    if (firstFlag) {
      fn.apply(this, args)
      firstFlag = false
      return
    }
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

export const throttle = (fn, delay) => {
  let lastTime = 0
  return function (...args) {
    const now = +new Date()
    if (now - lastTime >= delay) {
      fn.apply(this, args)
      lastTime = now
    }
  }
}

// 节流也可以用定时器
export const throttleTimer = (fn, delay) => {
  let timer = null
  return function (...args) {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

// 尾调用节流，用户快速滚动页面，在停止滚动时确保最后一次计算
// 每一次都要假设是最后一次，用 timer 来进行计时
export const throttleTrailing = (fn, delay, trailing = true) => {
  let lastTime = 0
  let timer = null
  return function (...args) {
    const curDate = +new Date()
    if (curDate - lastTime >= delay) {
      lastTime = curDate
      if (timer) {
        timer = null
        clearTimeout(timer)
      }
      fn.apply(this, args)
      return
    }
    if (!timer && trailing) {
      timer = setTimeout(
        () => {
          fn.apply(this, args)
          timer = null
        },
        delay - (curDate - lastTime),
      )
    }
  }
}
