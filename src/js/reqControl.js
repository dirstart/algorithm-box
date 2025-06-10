// 增加一个【高优先级队列】，就能够支持插队了
export default class ReqControl {
  constructor(max, list) {
    this.max = max
    this.list = list
  }
}

const instance = new ReqControl(5, [])
