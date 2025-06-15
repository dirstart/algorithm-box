type ReqTask<T> = () => Promise<T>

class ReqControl {
  private maxLen: number
  private pending: ReqTask<any>[]
  constructor(max: number) {
    this.maxLen = max
    this.pending = []
  }

  addTask<T>(task: ReqTask<T> | ReqTask<T>[]): this {
    if (Array.isArray(task)) {
      this.pending.push(...task)
    } else {
      this.pending.push(task)
    }
    return this
  }

  run() {
    if (!this.pending.length) {
      return
    }
    const fn = this.pending.pop()! // 自动推断为 ReqTask<any>[]
    fn().then(() => {
      this.run()
    })
  }

  start() {
    for (let i = 0; i < this.maxLen; i++) {
      this.run()
    }
    return this
  }
}

const reqInstance = new ReqControl(6)

const list: ReqTask<number>[] = Array.from(
  { length: 100 },
  (_, index): ReqTask<number> => {
    return () =>
      new Promise<number>((resolve) => {
        setTimeout(() => {
          resolve(index)
          console.log('🍀🍀🍀🍀', index)
        }, 1000)
      })
  },
)

reqInstance.addTask(list).start()
