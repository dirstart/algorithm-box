const throttle = <T extends (...args: any) => any>(
  fn: T,
  delayTime: number,
) => {
  let lastTime: number = 0
  return function (this: any, ...args: []) {
    const currentTime: number = +new Date()
    if (currentTime - lastTime > delayTime) {
      fn.apply(this, args)
      lastTime = currentTime
    }
  }
}

let xCount = 0

const throttleFn = () => ++xCount

const _fn = throttle(throttleFn, 100)

_fn() // 执行一次
_fn()
_fn()
setTimeout(() => {
  _fn() // 执行第二次
  setTimeout(() => {
    console.log('🍀🍀🍀🍀', xCount) // 2
  }, 300)
}, 300)
