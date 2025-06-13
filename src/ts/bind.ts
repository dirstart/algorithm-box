interface Function {
  myBind<T, A extends any[], B extends any[], R>(
    this: (this: T, ...args: [...A, ...B]) => R,
    thisArg: T,
    ...outerArgs: A
  ): (...innerArgs: B) => R
}

Function.prototype.bind = function <T, A extends any[], B extends any[], R>(
  this: (this: T, ...args: [...A, ...B]) => R,
  thisArg: T,
  ...outerArgs: A
): (...innerArgs: B) => R {
  const originFunc = this
  const fn = function (this: any, ...innerArgs: B) {
    const context = new.target ? this : thisArg
    return originFunc.apply(context, [...outerArgs, ...innerArgs])
  }

  if (originFunc.prototype) {
    fn.prototype = Object.create(originFunc.prototype)
  }

  return fn
}
