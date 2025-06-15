interface Function {
  myCall: <T, A extends any[], R>(
    this: (this: T, ...args: A) => R,
    context: T,
    ...args: A
  ) => R
}

Function.prototype.myCall = function <T, A extends any[], R>(
  this: (this: T, ...args: A) => R,
  context: T,
  ...args: A
): R {
  context = context ?? (globalThis as T)
  const fnKey = Symbol('fnKey')
  ;(context as any)[fnKey] = this
  const result = (context as any)[fnKey](...args)
  delete (context as any)[fnKey]
  return result
}

const obj = {
  a: 1,
  b: 2,
}

function show(this: { a: number }, b: string, c: string, d: string) {
  console.log('🍀🍀🍀🍀', this.a)
  console.log('🍀🍀🍀🍀', b, c, d)
}

show.myCall(obj, 'test', '123', 'abc')
