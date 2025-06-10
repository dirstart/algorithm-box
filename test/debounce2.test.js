// import { expect } from 'chai'
// import { debounce } from '../src/js/debounce.js'

// describe('防抖函数测试', () => {
//   it('应该在指定延迟后执行一次', (done) => {
//     let count = 0
//     const debouncedFn = debounce(() => {
//       count++
//     }, 100)

//     debouncedFn()
//     debouncedFn()
//     debouncedFn()

//     expect(count).to.equal(0)

//     setTimeout(() => {
//       expect(count).to.equal(1)
//       done()
//     }, 150)
//   })

//   it('应该正确传递参数', (done) => {
//     let result = null
//     const debouncedFn = debounce((a, b) => {
//       result = a + b
//     }, 100)

//     debouncedFn(1, 2)

//     setTimeout(() => {
//       expect(result).to.equal(3)
//       done()
//     }, 150)
//   })

//   it('应该保持正确的 this 上下文', (done) => {
//     const obj = {
//       value: 0,
//       increment() {
//         this.value++
//       },
//     }

//     const debouncedFn = debounce(obj.increment, 100)
//     debouncedFn.call(obj)

//     setTimeout(() => {
//       expect(obj.value).to.equal(1)
//       done()
//     }, 150)
//   })
// })
