function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 100,
) {
  let timer: ReturnType<typeof setTimeout> | null = null
  return function (this: any, ...args: Parameters<T>) {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

let count = 0

const fn = () => ++count

const debounceFn = debounce(fn)

debounceFn()
debounceFn()
debounceFn()
debounceFn()
debounceFn()

setTimeout(() => {
  console.log('🍀🍀🍀🍀', count) // 1
}, 300)
