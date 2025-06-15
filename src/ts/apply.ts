interface Function {
  myApply: <T, A extends any[], R>(
    this: (this: T, args: A) => R,
    context: T,
    args: A,
  ) => R
}

Function.prototype.myApply = function <T, A extends any[], R>(
  this: (this: T, args: A) => R,
  context: T,
  args: A,
): R {
  context = context ?? (globalThis as unknown as T)
  const fnKey: symbol = Symbol('fnKey')
  ;(context as any)[fnKey] = this
  const result = (context as any)[fnKey](...args)
  delete (context as any)[fnKey]
  return result
}

const objForApply = {
  a: 1,
  b: 2,
}

function showApply(this: { a: number }, b: string, c: string, d: string) {
  console.log('🍀🍀🍀🍀', this.a)
  console.log('🍀🍀🍀🍀', b, c, d)
}

showApply.apply(objForApply, ['123', 'chp', 'ddd'])
