interface Function {
  advancedBind: <T, A extends any[], B extends any[], R>(
    this: (this: T, ...args: [...A, ...B]) => R,
    fn: T,
    ...innerArgs: A
  ) => (...outerArgs: B) => R
}

Function.prototype.advancedBind = function <
  T,
  A extends any[],
  B extends any[],
  R,
>(
  this: (this: T, ...args: [...A, ...B]) => R,
  fn: T,
  ...innerArgs: A
): (...outerArgs: B) => R {
  const self = this

  const boundFn = function (this: any, ...outerArgs: B) {
    if (new.target) {
      return self.apply(this, [...innerArgs, ...outerArgs])
      // const ins = new (self as any)(...innerArgs, ...outerArgs)
      // Object.setPrototypeOf(ins, boundFn.prototype)
      // return ins
    }
    return self.apply(fn, [...innerArgs, ...outerArgs])
  }

  if (self.prototype) {
    boundFn.prototype = Object.create(self.prototype)
    boundFn.prototype.constructor = boundFn
  }
  return boundFn
}

interface Instance {
  a: number
}

interface FType {
  (this: Instance, a: number, b: number): void
  new (a: number, b: number): Instance
}

function F(this: Instance, a: number, b: number) {
  console.log('🍀🍀🍀🍀原来的a是多少', this.a) // 100000
  this.a = a
  console.log('🍀🍀🍀🍀', this.a, b) // 0 9999
}
const bindF = F.advancedBind({ a: 100000 }, 0)
const fInstance: Instance = new (bindF as any)(100)
console.log('🍀🍀🍀🍀', fInstance instanceof F) // true
console.log('🍀🍀🍀🍀', fInstance instanceof bindF) // false

const realBindF = F.bind({ a: 666 }, 0)
const realFInstance: Instance = new (realBindF as any)(300)
console.log('🍀🍀🍀🍀', realFInstance instanceof F) // true
console.log('🍀🍀🍀🍀', realFInstance instanceof realBindF) // true
