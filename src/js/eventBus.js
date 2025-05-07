class EventBus {
  constructor() {
    this.event = {}
  }

  on(name, fn) {
    if (!this.event[name]) {
      this.event[name] = []
    }
    this.event[name].push(fn)
  }

  off(name, fn) {
    if (!this.event[name]) {
      return
    }
    this.event[name] = this.event[name].filter((f) => f !== fn)
  }

  emit(name, ...args) {
    if (!this.event[name]) {
      return
    }
    this.event[name].forEach((fn) => fn(...args))
  }

  once(name, fn) {
    const wrapper = (...args) => {
      fn(...args)
      this.off(name, wrapper)
    }
    this.on(name, wrapper)
  }
}
