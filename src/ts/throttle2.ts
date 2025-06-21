// const throttleX = (fn: (...args: any[]) => any, delay: number) => {
//   let lastTime: number = 0
//   return function (this: any, ...args: any[]) {
//     const curTime = +new Date()
//     if (curTime - lastTime >= delay) {
//       fn.apply(this, args)
//       lastTime = curTime
//     }
//   }
// }

// const throttleX = <T extends (...args: any[]) => any>(
//   fn: T,
//   delayTime: number,
// ): ((this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T> | void => {
//   let lastTime = 0;
//   return function (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> | void {
//     const currentTime = +new Date();
//     if (currentTime - lastTime > delayTime) {
//       lastTime = currentTime;
//       return fn.apply(this, args);
//     }
//   };
// };

const throttleGod = <T extends (...args: any[]) => any>(
  fn: T,
  delayTime: number,
): ((
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T> | void) => {
  let lastTime = 0
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const currentTime: number = +new Date()
    if (currentTime - lastTime >= delayTime) {
      fn.apply(this, args)
      lastTime = currentTime
    }
  }
}
