// 100个请求，一次发送6个
const reqList = Array.from(new Array(100), (item, index) => {
  return function () {
    return new Promise((resolve) => {
      const time = Math.floor(Math.random() * 3000 + 1000)
      setTimeout(() => {
        resolve(index)
      }, time)
    })
  }
})

class Req {
  constructor(max = 6, reqList = []) {
    this.max = max
    this.list = reqList
  }
  start() {
    for (let i = 0; i < this.max; i++) {
      this.run()
    }
  }
  run() {
    if (this.list.length <= 0) {
      return
    }
    const task = this.list.pop()
    task().then((res) => {
      console.log('🍀🍀🍀🍀', res)
      this.run()
    })
  }
}

const ins = new Req(6, reqList)
ins.start()
