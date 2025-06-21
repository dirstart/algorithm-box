const dynamicTimer = (fn, interval) => {
  let expcted = +new Date() + interval
  const tick = () => {
    const curTime = +new Date()
    const drift = curTime - expcted // 延后了大概多少，通常是 5-7 ms
    expcted += interval
    console.log('🍀🍀🍀🍀', drift)
    fn()
    setTimeout(tick, Math.max(0, interval - drift))
  }

  setTimeout(tick, interval)
}
