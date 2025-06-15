// interface Function {
//   myBind: <T, A extends any[], B extends any[], R>(
//     this: (this: T, ...args: [...A, ...B]) => R,
//     fn: T,
//     ...innerArgs: A
//   ) => (...outerArgs: B) => R
// }

// Function.prototype.myBind = function <T, A extends any[], B extends any[], R>(
//   this: (this: T, ...args: [...A, ...B]) => R,
//   fn: T,
//   ...innerArgs: A
// ): (...outerArgs: B) => R {
//   const context = this
//   return function (...outerArgs) {
//     return context.apply(fn, [...innerArgs, ...outerArgs])
//   }
// }

// // 1.定义实例类型
// interface FunctionInstance {
//   a: number
// }

// // 2.定义函数
// interface FunctionType {
//   (this: FunctionInstance, a: number, b?: string): void
//   new (a: number, b?: string): FunctionInstance
// }

// // 3.函数实现
// function F(this: FunctionInstance, a: number, b?: string) {
//   console.log('🍀🍀🍀🍀原来的a是多少', this.a)
//   this.a = a
//   console.log('🍀🍀🍀🍀', this.a, b)
// }

// const bindF = F.myBind({ a: 9999 }, 123)

// bindF('string') // 9999  123  string

// console.log(bindF instanceof F) // false
