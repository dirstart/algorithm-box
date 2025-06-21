const setPreciseInterval = (fn, delay) => {
  let expected = performance.now() + delay
  const tick = function () {
    const curTime = performance.now()
    const drift = curTime - expected
    expected += delay
    // 发回主信息
    self.postMessage({
      time: curTime.toFixed(0),
      drift,
    })
    fn()
    setTimeout(tick, Math.max(0, delay - drift))
  }

  setTimeout(tick, delay)
}

// 接收主线程的消息
self.onmessage = function (e) {
  if (e.data.type === 'start') {
    setPreciseInterval(() => {}, 1000)
  }
}
