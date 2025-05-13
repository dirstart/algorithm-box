function printMermory() {
  let used = 0

  return function (isPrint) {
    let nowUsed = process.memoryUsage().heapUsed
    if (isPrint) {
      console.log('🍀🍀🍀🍀 总共减少了', (used - nowUsed) / 1024 / 1024)
    } else {
      used = nowUsed
    }
  }
}

const cost = printMermory()

function testMap() {
  const map = new Map()
  let keys = []
  for (let i = 0; i < 10000; i++) {
    const key = { index: i }
    keys.push(key)
    map.set(key, 1)
  }
  cost()
  keys = null
  setTimeout(() => {
    gc()
  }, 0)

  setTimeout(() => {
    console.log('🍀🍀🍀🍀', '内存释放之后')
    cost(true)
  }, 3000)
}

function testWeakMap() {
  const map = new WeakMap()
  let keys = []
  for (let i = 0; i < 10000; i++) {
    const key = { index: i }
    keys.push(key)
    map.set(key, 1)
  }
  cost()
  keys = null
  setTimeout(() => {
    gc()
  }, 0)
  setTimeout(() => {
    console.log('🍀🍀🍀🍀', '内存释放之后')
    cost(true)
  }, 3000)
}

// testMap() // 总共减少了 1.170097351074218

testWeakMap() // 总共减少了 0.75359
