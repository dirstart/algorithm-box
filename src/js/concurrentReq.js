class ReqControl {
  constructor({ limit = 6, list }) {
    this.limit = limit
    this.list = list
  }

  start() {
    for (let i = 0; i < this.limit; i++) {
      this.run()
    }
  }
  addTask(fn) {
    const wrapFn = () => {
      return new Promise((resolve) => {
        fn().then((data) => {
          resolve(data)
          console.log('🍀🍀🍀🍀 的到这个值', data)
        })
      })
    }
    this.list.push(wrapFn)
  }
  // 实现执行完一个，继续执行下一个
  run() {
    if (!this.list.length) {
      return
    }
    const curFn = this.list.pop()
    curFn().then((data) => {
      console.log('🍀🍀🍀🍀', data)
      this.run()
    })
  }
}

const pList = Array.from(new Array(100), (item, index) => {
  return function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(index)
      }, 1000)
    })
  }
})
const ins = new ReqControl({
  list: pList,
})

ins.start()

ins.addTask(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = 'result'
      resolve(res)
      return res
    }, 200)
  })
})
