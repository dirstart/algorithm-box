// 流式处理：指的是数据是分批传输的
// 查询流式处理中，推入它的上一句、下一句、以及关键词所在句子本身
// 不允许重复

const target = `
  你起来刚好我躺下了，

  接着我的梦继续睡。
  
  被子还暖着，

  像未完成的对话。
  枕头凹陷处，

  两个夜晚轻轻重叠。
  你带走我的哈欠，
  像带走一件忘记还的外套。
  我们共用同一个疲倦，


  在晨昏线上交换身份。
  太阳和月亮，
  是两个轮流打盹的守夜人。
`
// 如果不需要流式处理

const findWord = (keywords, content) => {
  const set = new Set()
  const allList = []
  let lineReg = /^.+$/gm
  let match
  while ((match = lineReg.exec(content)) !== null) {
    const matchStr = match?.[0].trim()
    allList.push(matchStr)
  }
  const len = allList.length
  const pushLine = (line) => {
    if (set.has(line)) {
      return
    }
    set.add(line)
  }
  keywords.forEach((key) => {
    for (let i = 0; i < len; i++) {
      const line = allList[i]
      if (line.includes(key)) {
        if (i > 0) {
          pushLine(allList[i - 1])
        }
        pushLine(line)
        if (i < len - 1) {
          pushLine(allList[i + 1])
        }
      }
    }
  })

  return Array.from(set)
}

console.log('🍀🍀🍀🍀', findWord(['疲倦', '月亮'], target))
