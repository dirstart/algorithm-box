export const myInstanceof = (ins, targetCls) => {
  if (typeof targetCls !== 'function') {
    return TypeError('第二个参数必须是函数')
  }
  let p = Object.getPrototypeOf(ins)
  while (p) {
    if (p === targetCls.prototype) {
      return true
    }
    p = Object.getPrototypeOf(p)
  }
  return false
}
